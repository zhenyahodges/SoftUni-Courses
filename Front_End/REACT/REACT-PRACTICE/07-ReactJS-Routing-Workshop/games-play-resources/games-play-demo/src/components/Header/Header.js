import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAthenticated, email } = useContext(AuthContext);
    

    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1>
                <Link className='home' to='/'>
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to='/catalog'>All games</Link>
                {/* <!-- Logged-in users --> */}
            
                {isAthenticated && (   <div id='user'>
                        <span>{email}</span>
                        <Link to='/createGame'>Create Game</Link>
                        <Link to='/logout'>Logout</Link>
                    </div>)
                 
                }

                {/* <!-- Guest users --> */}
                {!isAthenticated && ( <div id='guest'>
                       <span>Guest</span>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>)
                   
                }
            </nav>
        </header>
    );
};
