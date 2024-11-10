import React, { useEffect, useState } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs"
import './Home.css'

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5555/get')
        .then(response => setTodos(response.data))
        .catch(err => console.log(err))
    },[])
    return (
        <div className='Home'>
            <h1>ToDo List</h1>
            <Create/>
            {
                todos.length === 0 ? 
                <div><h2>The List is Empty</h2></div>:
                todos.map((todo,index) => (
                    <div key={index} className='task'>
                        <div className='checkbox'>
                            <BsCircleFill className='checkbox-icon'/>
                            <p>{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className='delete-icon'/></span>
                        </div>
                    </div>
                ))
            }

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
