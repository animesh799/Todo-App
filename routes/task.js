import Express from "express";
import { createNewTask, deleteTask, getAllTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = Express.Router();

router.post("/newtask",isAuthenticated,createNewTask);

router.get("/getAll",isAuthenticated, getAllTask);

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);

export default router;
