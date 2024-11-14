import React, { useEffect, useState } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs"
import './Home.css'

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5555/get')
            .then(response => setTodos(response.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put(`http://localhost:5555/update/${id}`)
            .then(response => location.reload())
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5555/delete/${id}`)
            .then(response => location.reload())
            .catch(err => console.log(err))
    }

    return (
        <div className='home'>
            <div className='todo-card'>
                <h1 className='main_header'>ToDo List</h1>
                <Create />
                <div className='tasks-container'>
                    {
                        todos.length === 0 ?
                            <div><h2>The List is Empty</h2></div> :
                            todos.map((todo, index) => (
                                <div key={index} className='task'>
                                    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                        {
                                            todo.done
                                                ?
                                                <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                                                :
                                                <BsCircleFill className='icon' />
                                        }
                                        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                                    </div>
                                    <div>
                                        <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>


    )
}

export default Home

// import React, { useEffect, useState } from 'react';
// import Create from './Create.jsx';
// import axios from 'axios';

// const Home = () => {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5555/get')  // Corrected URL here
//             .then(response => setTodos(response.data))  // Set `todos` to the array inside response.data
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className='Home'>
//             <h1>ToDo List</h1>
//             <Create />
//             {
//                 todos.length === 0 ?
//                 <div><h2>The List is Empty</h2></div> :
//                 todos.map((todo, index) => (  // Added `key` prop
//                     <div key={index}>
//                         <p>{todo.task}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }

// export default Home;
