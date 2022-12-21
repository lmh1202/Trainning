import express from "express";
import cors from "cors";
import ApiRouter from "./routers/api.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", ApiRouter);

app.listen(3000, function () {
  console.log("Successfully");
});
