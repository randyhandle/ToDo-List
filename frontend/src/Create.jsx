import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./Create.css"

const Create = () => {
    const [task, setTask] = useState()

    const handleAdd = () => {
        axios.post('http://localhost:5555/add',{task:task})
        .then(result => location.reload())
        .catch(err => console.log(err))
    }

  return (
    <div className='header'>
        <input type="text" placeholder='Enter Task' className='create_form input' onChange={(e) => setTask(e.target.value)}/>
        <button type='button' className='create_form button' onClick={handleAdd}>Add</button>
    </div>
    
  )
}

export default Create