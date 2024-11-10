import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import ToDoModel from './models/ToDo.js'

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/ToDoList')

app.post('/add',(req,res) => {
    const task = req.body.task;
    ToDoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get("/get",(req,res) => {
    ToDoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(5555, () => {
    console.log("Server is Running....")
    console.log("Port : 5555")
})