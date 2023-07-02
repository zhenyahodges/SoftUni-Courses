import {
    NavLink,
    Outlet,
    redirect,
    useLoaderData,
    useNavigation,
} from 'react-router-dom';
import { requireAuth } from '../../utils/requireAuth';
import { getUserInfo } from '../../utils/authService';
import ProfileUser from './ProfileUser';

export async function loader({ request, params }) {
    const { userId, token } = await requireAuth(request);
    const res = await getUserInfo(token);
    const { fname, lname, email } = res;
    const user = { fname, lname, email, userId, token };
    const pathname = new URL(request.url).searchParams.get('message');

    if (!userId) {
        return redirect(pathname);
    }

    if (!token) {
        return redirect(pathname);
    }

    redirect(request.url);

    return user;
}

export default function ProfileLayout() {
    const user = useLoaderData();
    const navigation = useNavigation();

    const activeStyles = {
        backgroundColor: '#F79234',
        color: '#132930',
        fontWeight: 'bold',
    };

    return (
        <section className='profile window container'>
            <h2>Profile</h2>

            <div className='profile-wrapper'>
                <div className='profile-form-wrap'>
                    <ProfileUser props={user} />

                    <nav className='prof-nav'>
                        <NavLink
                            to='.'
                            end
                            className='btn dark show published'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'User Cards'}
                        </NavLink>
                        <NavLink
                            to='suggested'
                            className='btn dark show suggested'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Suggested'}
                        </NavLink>
                        <NavLink
                            to='userInfos'
                            className='btn dark show pub infos'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'User Infos'}
                        </NavLink>
                        <NavLink
                            to='create'
                            className='btn light show create'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Create Card'}
                        </NavLink>
                        <NavLink
                            to='createinfo'
                            className='btn light show create'
                            style={({ isActive }) =>
                                isActive ? activeStyles : null
                            }
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Post Info'}
                        </NavLink>
                    </nav>
                </div>

                <section className='user-profile-cards-wrapper'>
                    <Outlet context={user} />
                </section>
            </div>
        </section>
    );
}
