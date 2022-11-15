import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://http://127.0.0.1:5501"],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(8000);
