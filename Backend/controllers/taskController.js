const Task = require("../models/Task");

//crate task

const createTask = async(req , res)=>{
    try{ 
        const { title,description} = req.body;
        const task = await Task.create({
            title,
            description,
            user:req.user
        });
        res.status(201).json(task);

    }catch(error){
        return res.status(500).json({
            message:"failde to create task"
        });
    }
};
// GET TASK

const getTasks = async(req,res)=>{
    try{
const task = await Task.find({
    user:req.user
});
res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({
            message:"failed to fetch tasks"
        });
    }
};

// ONE TASK 
const getTaskById = async(req,res)=>{
    try{
const task = await Task.find({
    _id:req.params.id,
    user:req.user
});
if(!task){
    res.status(404).json({
        message:"task not found"
    });
}
res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({
            message:"failed to fetch tasks"
        });
    }
};
//PARTIAL UPDATE
const updateTask = async (req,res)=>{
    try{

        const{title, description} = req.body;
        const task = await Task.findOne({
                _id:req.params.id,
                user:req.user
        });
        if(!task){
    res.status(404).json({
        message:"task not found"
    });
}
if(title !== undefine){
    task.title = title;
}
if(description !== undefine){
    task.description = description;
}
if( status !== undefine){
    task.status = status;
}
await task.save();
res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({
            message:"failed to update task"
        });
    }
};
//PUT

const replaceTask = async(req,res)=>{
    try{
const task = await Task.find({
    _id:req.params.id,
    user:req.user
});
if(!task){
    res.status(404).json({
        message:"task not found"
    });
}
if(!title){
    res.status(400).json({
        message:"Title is required"
    });
}
task.title = title;
task.description = description?? "";
task.status = status ?? "pending";
await task.save();
res.status(200).json(task);
    }catch(error){
        res.status(500).json({
            message : "failded to replace task"
        });
    }
};
//
const deleteTask = async (req,res)=>{
    try{
      const{title, description} = req.body;
        const task = await Task.findOneAndDelete({
                _id:req.params.id,
                user:req.user
        });
        if(!task){
    res.status(404).json({
        message:"task not found"
    });
}
res.status(200).json({

    message:"Tasks deleted successfully"
});
    }catch(error){
        res.status(500).json({
            message : "failde to delete"
        });
    }
}
module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  replaceTask,
  deleteTask
};