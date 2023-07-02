import { Form, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { logoutUser } from '../../utils/authService';
import { requireAuth } from '../../utils/requireAuth';
import { useWhoIsLooking } from '../../context/CurrentUserContext';
import { useLogged } from '../../context/LoggedContext';

export async function loader({ request }) {
    await requireAuth(request);
    return new URL(request.url).searchParams.get('message');
}
let pathname;

export async function action({ request }) {
    pathname = new URL(request.url).searchParams.get('redirectTo') || '/cards';

    return redirect(pathname);
}

export default function Logout() {
    const { setIsLogged } = useLogged();
    const { setWhoIsLooking } = useWhoIsLooking();
    const navigation = useNavigation();
    const navigate = useNavigate();

    const onLogout = async () => {
        const { token } = JSON.parse(localStorage.getItem('user'));
        await logoutUser(token);
        localStorage.clear();
        setIsLogged(false);
        setWhoIsLooking('Guest');
        navigate('/');
    };

    const onStay = () => {
        return navigate(-1);
    };

    return (
        <section className='login logout form-wrapper'>
            <h2>Logout</h2>
            <Form replace id='logout-form' className='logout login form'>
                <div className='logout-wrap wrap email'>
                    <label
                        htmlFor='confirm'
                        className='logout-text log lbl email'
                    >
                        Are you sure you want to logout?
                    </label>
                </div>
                <div className='logout-btn-container'>
                    <button
                        method='get'
                        onClick={onLogout}
                        className='logout log btn dark subm'
                        form='logout-form'
                        id='btn-log-form'
                        disabled={navigation.state === 'loading'}
                    >
                        {navigation.state === 'loading'
                            ? 'Logging Out...'
                            : 'Yes'}
                    </button>
                    <button
                        type='submit'
                        method='post'
                        className='logout log btn dark subm'
                        form='log-form'
                        id='btn-log-form'
                        onClick={onStay}
                        disabled={navigation.state === 'submitting'}
                    >
                        {navigation.state === 'submitting'
                            ? 'Redirecting...'
                            : 'No'}
                    </button>
                </div>
            </Form>
            {/* <!-- END LOGOUT --> */}
        </section>
    );
}
