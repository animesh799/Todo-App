import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const createNewTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    await Task.create({
      title,
      description,
      user: req.user,
    });
    res.status(200).json({
      status: true,
      message: "Task created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTask = async (req, res, next) => {
  try {
    const userId = req.user;
    const tasks = await Task.find({ user: userId }); //fids all task where the user id matches
    res.status(200).json({
      status: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new ErrorHandler("Invalid TaskID", 404));
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      status: true,
      message: "task updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new ErrorHandler("Invalid TaskID", 404));
    await task.deleteOne();
    res.status(200).json({
      status: true,
      message: "task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
