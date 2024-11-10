import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    task:String
})
const ToDoModel = mongoose.model("todos",ToDoSchema)
export default ToDoModel