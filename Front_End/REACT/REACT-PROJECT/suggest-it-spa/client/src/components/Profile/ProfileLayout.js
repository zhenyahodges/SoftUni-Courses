import {
    NavLink,
    Outlet,
    redirect,
    useLoaderData,
    useNavigation,
} from 'react-router-dom';
import { requireAuth } from '../../utils/requireAuth';
import { getUserInfo } from '../../services/authService';
import ProfileUser from './ProfileUser';
import RenderNavLink from '../Buttons/RenderNavLink/RenderNavLink';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const res = await getUserInfo(token);
    const { fname, lname, email } = res;
    const user = { fname, lname, email, userId, token };
    const pathname = new URL(request.url).searchParams.get('message');

    if (!userId || !token) {
        return redirect(pathname);
    }

    redirect(request.url);
    const urlMessage = new URL(request.url).searchParams.get('message');
    const result = { user, urlMessage };
    return result;
}

export default function ProfileLayout() {
    const { user, urlMessage } = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const message = urlMessage;

    const activeStyles = {
        backgroundColor: '#F79234',
        color: '#132930',
        fontWeight: 'bold',
    };

    const navLinksData = [
        {
            to: 'suggested',
            className: 'btn dark show suggested',
            id: 'suggested',
            text: 'Suggested',
        },
        {
            to: 'userInfos',
            className: 'btn dark show infos',
            id: 'userInfos',
            text: 'User Infos',
        },
        {
            to: 'create',
            className: 'btn light show create',
            id: 'create',
            text: 'Create Card',
        },
        {
            to: 'createinfo',
            className: 'btn light show create',
            id: 'createinfo',
            text: 'Post Info',
        },
    ];

    return (
        <section className='profile window container'>
            <h2>Profile</h2>
            {message && <h3 style={{ color: 'red' }}>{message}</h3>}
            <div className='profile-wrapper'>
                <div className='profile-form-wrap'>
                    <ProfileUser props={user} />

                    <nav className='prof-nav'>
                        <NavLink
                            to='.'
                            end
                            className='btn dark show published'
                            id='profile'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'User Cards'}
                        </NavLink>
                        {navLinksData.map(({ to, className, id, text }) => (
                            <RenderNavLink
                                key={id}
                                to={to}
                                classN={className}
                                id={id}
                                text={text}
                                activeStyles={activeStyles}
                            />
                        ))}
                    </nav>
                </div>

                <section className='user-profile-cards-wrapper'>
                    <Outlet />
                </section>
            </div>
        </section>
    );
}
