import {Container,Nav,Navbar,NavDropdown,Button } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import{TodoList} from './components/TodoList';
import { useEffect, useState } from 'react';
import { AddTodoModal } from './components/AddTodoModal';

const baseUrl='http://localhost:3030/jsonstore/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch(baseUrl)
    .then(res=>res.json())
    .then(result=>{
      setTodos(Object.values(result));
    });
  },[]);

    return (
       <>
        <Header/>
        <TodoList todos={todos}/>
        <AddTodoModal/>
        </>
    );
}

export default App;
