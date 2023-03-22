import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import{TodoList} from './components/TodoList';

function App() {
    return (
       <>
        <Header/>
        <TodoList/>
        </>
    );
}

export default App;
