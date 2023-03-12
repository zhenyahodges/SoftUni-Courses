import {useEffect, useState} from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import TodoList from './components/TodoList';

function App() {

const [todos,setTodos]=useState([]);
// prazen masiv st-st nachalna!!!!

  useEffect(()=>{
    fetch('http://localhost:3030/jsonstore/todos')
    .then(res=>res.json())
    .then(data=>{
      setTodos(Object.values(data));
    });
  },[]);

    return (
        <body>
            <Header />
            {/* <!-- Main content --> */}
            <main className='main'>
                {/* <!-- Section container --> */}
                <section className='todo-list-container'>
                    <h1>Todo List</h1>

                    <div className='add-btn-container'>
                        <button className='btn'>+ Add new Todo</button>
                    </div>

                    <div className='table-wrapper'>
                        {/* <Loading></Loading> */}

                        <TodoList todos={todos}/>
                    </div>
                </section>
            </main>

            <Footer />
        </body>
    );
}

export default App;
