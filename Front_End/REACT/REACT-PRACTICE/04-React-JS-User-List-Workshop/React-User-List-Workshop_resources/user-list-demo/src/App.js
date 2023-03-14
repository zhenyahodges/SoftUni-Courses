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
    

    // where users are
    // DOM way,not react way!
    const onUserCreateSumbit=async(e)=>{
      e.preventDefault();
      const formData=new FormData(e.currentTarget);
      const data=Object.fromEntries(formData);
      // send ajax to server
      const createdUser= await userService.create(data);

      // if succ add new user to the state
      setUsers(state=>[...state, createdUser]);
      // close dialog
    };

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
                    <UserList users={users} onUserCreateSumbit={onUserCreateSumbit}/>

                   
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
