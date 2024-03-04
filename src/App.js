import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import React from 'react'
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";
import { Container} from "react-bootstrap";

const App = () => {
  return (
    <Container className="text-center">
      <Header/>
      <TodoList/>
    </Container>
  )
}

export default App
