import { NavLink, useNavigation } from 'react-router-dom';

export default function RenderNavLink({activeStyles,to, classN, id, text}) {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';


    return (
        <NavLink
            to={to}
            className={classN}
            id={id}
            style={({ isActive }) =>
            isActive ? {...activeStyles}: null
        }
            disabled={isLoading}
        >
            {isLoading ? 'Loading..' : text}
        </NavLink>
    );
}
