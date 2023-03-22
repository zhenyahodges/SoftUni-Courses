import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { useEffect, useState } from 'react';
import { AddTodoModal } from './components/AddTodoModal';
import { TodoContext } from './contexts/TodoContext';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then((result) => {
                setTodos(Object.values(result));
            });
    }, []);

    const onTodoAdd = async (values) => {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(values),
        });
        const result = await res.json();
        setShowAddTodo(false);
        setTodos((state) => [...state, result]);
    };

    const onTodoAddClick = () => {
        setShowAddTodo(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodo(false);
    };

    // const onTodoDelClick = async (todoId) => {
    //     await fetch(`${baseUrl}/${todoId}`, {
    //         method: 'DELETE',
    //     });
    //     setTodos((state) => state.filter((x) => x._id !== todoId));
    // };

    return (
        <TodoContext.Provider value={'Pesho'}>
        <>
            <Header />
            <TodoList
                todos={todos}
                onTodoAddClick={onTodoAddClick}
                // onTodoDelClick={onTodoDelClick}
            />
            <AddTodoModal
                show={showAddTodo}
                onTodoAdd={onTodoAdd}
                onTodoAddClose={onTodoAddClose}
            />
        </>
        </TodoContext.Provider>
    );
}

export default App;
