import {Link, NavLink} from 'react-router-dom';
import { Navigation } from './Navigation';
import styles from './Navigation.module.css';

export const MainNavigation = () => {
    return (
        <Navigation>
            {/* <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About</Link>
                </li>
                <li><Link to='/characters'>Characters</Link>
                </li> */}
                <li>
                    <NavLink style={({isActive})=>({color: isActive? 'purple' : 'white'})} to="/">Home</NavLink>
                </li>
                <li>
                    {/* <NavLink className={({isActive})=>isActive ? styles['nav-active']: ''} to='/about'>About</NavLink> */}
                    <NavLink style={({isActive})=>({color: isActive? 'purple' : 'white'})} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>({color: isActive? 'purple' : 'white'})} to='/characters'>Characters</NavLink>
                </li>
        </Navigation>
        
                
         
    );
};
