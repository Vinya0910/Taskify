const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/tasks", taskRoutes);
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongoDB connected");
})
.catch((error)=>{
    console.log("connection failed",error);
});

app.get("/",(req,res)=>{
  res.json({
    message : "Hello"
  });
});
app.listen(PORT,()=>{
  console.log("server running");
});