const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  replaceTask,
  deleteTask
} = require("../controllers/taskController");

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.get("/:id", protect, getTaskById);

router.patch("/:id", protect, updateTask);

router.put("/:id", protect, replaceTask);

router.delete("/:id", protect, deleteTask);

module.exports = router;