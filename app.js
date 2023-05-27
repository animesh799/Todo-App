import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandelingMiddleware } from "./middlewares/error.js";
import cors from "cors"
export const app = express();

config({ path: "./Data/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONT_END],
  methods:["GET","PUT","POST","DELETE"],
  credentials:true
}))
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task",taskRouter)

app.get("/", (req, res) => {
  res.send("Nice working");
});


app.use(errorHandelingMiddleware)