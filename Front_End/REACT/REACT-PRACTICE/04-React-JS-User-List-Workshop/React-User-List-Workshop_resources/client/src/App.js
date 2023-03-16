// import { Fragment } from 'react';
import { useEffect, useState } from 'react';

// import all named exports as service
import * as userService from './services/userService';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import './App.css';
import { UserList } from './components/UserList';

function App() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
    });

    const [formErrs, setFormErrs] = useState({
        firstName: '',
        lastName: '',
    });

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
    const onUserCreateSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        // send ajax to server
        const createdUser = await userService.create(data);

        // if succ add new user to the state
        setUsers((state) => [...state, createdUser]);
        // close dialog
    };

    const onUserUpdateSubmit = async (e, userId) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const updatedUser = await userService.update(userId, data);
        setUsers((state) =>
            state.map((x) => (x._id === userId ? updatedUser : x))
        );
    };

    const onUserDelete = async (userId) => {
        //delete from server
        await userService.remove(userId);
        // delete from state
        setUsers((state) => state.filter((x) => x._id !== userId));
    };

    const formChangeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const validateForm = (e) => {
        const val = e.target.value;
        const errs = {};

        if (e.target.name === 'firstName' && (val.length < 3 || val.length > 20)) {
            errs.firstName = 'First name should be between 3 and 20 chars';
        }

        if (e.target.name === 'lastName' && (val.length < 3 || val.length > 20)) {
            errs.lastName = 'Last name should be between 3 and 20 chars';
        }
        setFormErrs(errs);
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
                    <UserList
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserDelete={onUserDelete}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                        formValues={formValues}
                        formChangeHandler={formChangeHandler}
                        formErrs={formErrs}
                        validateForm={validateForm}
                    />
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
