import React, { useState } from 'react'
import Create from './Create.jsx'

const Home = () => {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <h2>ToDo List</h2>
        <Create/>
        {
            todos.length === 0 ? 
            <div><h2>The List is Empty</h2></div>:
            todos.map(todo => (
                <div>
                    {todo}
                </div>
            ))
        }

    </div>
    
    
  )
}

export default Home