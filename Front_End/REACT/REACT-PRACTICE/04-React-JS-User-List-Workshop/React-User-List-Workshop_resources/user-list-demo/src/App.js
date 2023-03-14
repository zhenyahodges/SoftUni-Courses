// import { Fragment } from 'react';
import { useEffect, useState } from 'react';

// import all named exports as service
import * as userService from './services/userService';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import './App.css';
import { UserList } from './components/UserList';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService
            .getAll()
            // .then(users=>{
            //   setUsers(users);
            //   console.log(users);
            // })
            .then(setUsers)
            // })
            .catch((err) => {
                console.log('Error' + err);
            });
    }, []);

    return (
        // {/* za da ne pokazvame add div, import Fragment */}
        // <Fragment></Fragment>
        // shorthand for <Fragment> <></>
        <>
            <Header />
            {/* <!-- Main component  --> */}
            <main className='main'>
                {/* <!-- Section component  --> */}
                <section className='card users-container'>
                    <Search />
                    <UserList users={users} />

                   
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
