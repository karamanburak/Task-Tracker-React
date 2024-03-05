import React, { useState } from 'react'
import AddTask from '../AddTask'
import ShowTasks from '../ShowTasks'

const Home = () => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("gorevler")) || [])


  return (
    <div>
      <AddTask todos={todos} setTodos={setTodos} />
      <ShowTasks todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Home