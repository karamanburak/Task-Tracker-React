import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button, Container, Form } from "react-bootstrap";
import AddTask from "../addTask/AddTask";
const TodoList = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null)

    const addItem = () => {

        setTodos([{ item: input, key: [Date.now()] }, ...todos]);


        console.log(todos);
        setInput("")
    }


    const onInputChange = (event) => {
        setInput(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault()
        setTodos([...todos, {id: uuidV4(), title: input, completed: false }])
        setInput("")
   

    }
  return (
      <Container>
          <div className='input-group w-50 m-auto mb-4'>
              <Form.Control
                  onSubmit={onFormSubmit}
                  type="search"
                  value={input}
                  onChange={onInputChange}
                  placeholder="Enter your tasks"
              />
              <Button
                  onClick={addItem}
                 type='submit'
                  className='text-white right fs-5' 
                  variant="success">
                  Add Task</Button>

          </div>
          <div className='task-container'>
              <h3 className='text-center my-3 task-list add'>Todo List</h3>

              <AddTask todos={todos} setTodos={setTodos}/>

          </div>
      </Container>
  )
}

export default TodoList