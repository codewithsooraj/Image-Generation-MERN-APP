import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello, This is Sooraj");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(2020, () =>
      console.log("Server has started on port https://localhost:2020")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
