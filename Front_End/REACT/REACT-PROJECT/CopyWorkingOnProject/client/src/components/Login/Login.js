import {
    Form,
    Link,
    redirect,
    useActionData,
    useLoaderData,
    useNavigation,
} from 'react-router-dom';
import { loginUser } from '../../utils/authService';
import { useLogged } from '../../context/LoggedContext';
import { useWhoIsLooking } from '../../context/CurrentUserContext';
import { useEffect } from 'react';

export async function loader({ request }) {    
    return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('pass');

    let pathname = new URL(request.url).searchParams.get('redirectTo') || '.';

    try {
        const data = await loginUser({ email, password });
        const token = data.accessToken;

        if (token) {
            const user = {
                email: data.email,
                userId: data._id,
                token,
            };
            localStorage.setItem('user', JSON.stringify(user));

            return redirect(`/users/${user.userId}`);
        }

        return redirect(pathname);
    } catch (err) {
        return err.message;
    }
}

export default function Login() {
    const { setIsLogged } = useLogged();
    const { whoIsLooking, setWhoIsLooking } = useWhoIsLooking();
    const userData = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (userData) {
            userData.userId ? setIsLogged(true) : setIsLogged(false);
            userData.email
                ? setWhoIsLooking(userData.email)
                : setIsLogged('Guest');
        } else {
            setIsLogged(false);
        }
    }, [setIsLogged, userData, whoIsLooking, setWhoIsLooking]);

    const navigation = useNavigation();
    const message = useLoaderData();
    const errorMessage = useActionData();

    return (
        <section className='login form-wrapper'>
            <h2>Login</h2>
            {message && <h3 style={{ color: 'red' }}>{message}</h3>}
            {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
            <Form method='post' id='log-form' className='login form'>
                <div className='wrap email'>
                    <label htmlFor='email' className='log lbl email'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='log entry email'
                        name='email'
                        id='log-email'
                        minLength='3'
                        maxLength='64'
                        autoComplete='email'
                        autoFocus
                        pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                        required
                    />
                </div>
                <div className='wrap pass'>
                    <label htmlFor='pass' className='log lbl pass'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='log entry pass'
                        name='pass'
                        id='log-pass'
                        autoComplete='current-password'
                        minLength='6'
                        maxLength='64'
                        placeholder='6 characters minimum'
                        required
                    />
                </div>
                <button
                    className='log btn dark subm'
                    form='log-form'
                    id='btn-log-form'
                    disabled={navigation.state === 'submitting'}
                >
                    {navigation.state === 'submitting' ? 'Logging...' : 'Login'}
                </button>
                <Link to='/register' className='login link'>
                    Don't have an account? Register
                </Link>
            </Form>
        </section>
    );
}
