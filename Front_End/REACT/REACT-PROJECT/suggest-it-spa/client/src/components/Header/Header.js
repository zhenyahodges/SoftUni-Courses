import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import RenderNavLink from '../Buttons/RenderNavLink/RenderNavLink';

export default function Header({ userId }) {
    const { currentUser } = useCurrentUser();
    const isGuest = currentUser === 'Guest';
    const classText = 'nav header list links';

    const activeStyles = {
        backgroundColor: '#F79234',
        borderRadius: '5px',
        textShadow: '1px 1px 1px #132930',
    };

    const navLinksData = [
        {
            to: '.',
            className: `${classText} home`,
            id: 'home',
            text: 'Home',
        },
        {
            to: 'cards',
            className: `${classText} cat`,
            id: 'cat',
            text: 'Catalog',
        },
        {
            to: 'infos',
            className: `${classText} cat`,
            id: 'info',
            text: 'Infos Catalog',
        },
        {
            to: 'login',
            className: `${classText} log`,
            id: 'log',
            text: 'Login',
            condition: isGuest,
        },    
        {
            to: 'register',
            className: `${classText} reg`,
            id: 'reg',
            text: 'Register',
            condition: isGuest,
        },
        {
            to: `users/${userId}`,
            className: `${classText} prof`,
            id: 'prof',
            text: 'Profile',
            condition: !isGuest,
        },
        {
            to: 'logout',
            className: `${classText} logout`,
            id: 'logout',
            text: 'Logout',
            condition: !isGuest,
        },
    ];

    return (
        <header className='page header'>
            <section className='header container special-border'>
                <div className='header-wrapper'>
                    <h1 className='title-header'>
                        <NavLink className='logo-nav' to='.'>
                            Suggest<span className='suggest-it'>It</span>
                        </NavLink>
                    </h1>
                    <p className='subtitle-header'>Ultimate Feedback</p>
                    <p></p>
                </div>

                <div className='header-nav-containter'>
                    <nav className='nav header'>
                        <ul className='nav header list'>
                            {navLinksData.map(
                                ({ to, className, id, text, condition }) =>
                                    condition !== false && (
                                        <RenderNavLink
                                            key={id}
                                            to={to}
                                            classN={className}
                                            id={id}
                                            text={text}
                                            activeStyles={activeStyles}
                                        />
                                    )
                            )}

                            {/* <!-- <a to="/about" className="nav header list links">About</a> --> */}
                            {/* <!-- <a to="/contact" className="nav header list links">Contact</a> --> */}
                            <span
                                className='whos-lookin-wrapper whos-lookin'
                                id='whos-lookin'
                                data-testid='user'
                            >
                                {currentUser}
                            </span>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    );
}
