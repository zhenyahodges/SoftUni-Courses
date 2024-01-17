import {
    Form,
    Link,
    redirect,
    useActionData,
} from 'react-router-dom';
import { registerUser } from '../../services/authService';
import { isAlreadyLogged } from '../../utils/isAlreadyLogged';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useEffect } from 'react';
import SubmitBtn from '../Buttons/SubmitBtns/SubmitBtn';

export async function loader() {
    const res = await isAlreadyLogged();
    if (res) {
        return redirect(`/${res.userId}`);
    }
    return null;
}

export async function action({ request }) {
    const formData = await request.formData();
    const fname = formData.get('fname');
    const lname = formData.get('lname');
    const email = formData.get('email');
    const password = formData.get('pass');
    const repass = formData.get('repass');

    if (password !== repass) {
        const errorMessage = 'Passwords do not match';
        return errorMessage;
    }

    try {
        const data = await registerUser({ fname, lname, email, password });

        const token = data.accessToken;
        if (token) {
            const user = {
                email: data.email,
                userId: data._id,
                token,
            };
            localStorage.setItem('user', JSON.stringify(user));
            return redirect(`/users/${data._id}`);
        }
    } catch (err) {
        return err.message;
    }
}

export default function Register() {
    const { currentUser, setCurrentUser } = useCurrentUser();
    const userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (userData) {
            setCurrentUser(userData.email);
        }
    }, [userData, currentUser, setCurrentUser]);

    const errorMessage = useActionData();

    return (
        <section className='register form-wrapper'>
            <h2>Register</h2>
            {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}

            <Form
                action='/register'
                method='post'
                id='reg-form'
                className='register form'
            >
                <div className='wrap fname'>
                    <label htmlFor='fname' className='reg lbl fname'>
                        First Name
                    </label>
                    <input
                        type='text'
                        className='reg entry fname'
                        name='fname'
                        id='reg-fname'
                        minLength='3'
                        maxLength='64'
                        autoComplete='given-name'
                        autoFocus
                        required
                    />
                </div>
                <div className='wrap lname'>
                    <label htmlFor='lname' className='reg lbl lname'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        className='reg entry lname'
                        name='lname'
                        id='reg-lname'
                        minLength='3'
                        maxLength='64'
                        autoComplete='family-name'
                        required
                    />
                </div>
                <div className='wrap email'>
                    <label htmlFor='email' className='reg lbl email'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='reg entry email'
                        name='email'
                        id='reg-email'
                        minLength='3'
                        maxLength='64'
                        autoComplete='email'
                        pattern='^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$'
                        required
                    />
                </div>
                <div className='wrap pass'>
                    <label htmlFor='pass' className='reg lbl pass'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='reg entry pass'
                        name='pass'
                        id='reg-pass'
                        minLength='6'
                        maxLength='64'
                        placeholder='6 characters minimum'
                        autoComplete='new-password'
                        required
                    />
                </div>
                <div className='wrap repass'>
                    <label htmlFor='repass' className='reg lbl repass'>
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        className='reg entry repass'
                        name='repass'
                        id='reg-repass'
                        minLength='6'
                        maxLength='64'
                        autoComplete='new-password'
                        required
                    />
                </div>
                <SubmitBtn
                    className={''}
                    form={'reg'}
                    id={'reg'}
                    action={'Registering'}
                    text={'Register'}
                />

                <Link to='/login' className='login link'>
                    Already have an account? Login
                </Link>
            </Form>
        </section>
    );
}
