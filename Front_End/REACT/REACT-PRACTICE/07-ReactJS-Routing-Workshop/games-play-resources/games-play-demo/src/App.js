import { Route, Routes, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Catalog } from './components/Catalog/Catalog';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService';
import * as authService from './services/authService';
import { GameDetails } from './components/GameDetails/GameDetails';
import { AuthContext } from './contexts/AuthContext';
import { Logout } from './components/Logout';

function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        gameService.getAll().then((result) => {
            setGames(result);
        });
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);

        //  add to state
        setGames((state) => [...state, newGame]);

        // redirect to catalog
        navigate('/catalog');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalog');
        } catch (err) {
            throw new Error(`Error: ${err.message}`);
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;

        if (confirmPassword !== registerData.password) {
            return console.log('Error confirming password');
            // message
        }
        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalog');
        } catch (err) {
            throw new Error(`Error: ${err.message}`);
        }
    };

    const onLogout = async () => {
        // todo add authorization
        // await authService.logout();

        // setAuth(null);
        setAuth({});
    };

    const contextData = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        email: auth.email,
        isAthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={contextData}>
            <div id='box'>
                <Header />
                {/* <!-- Main Content --> */}
                <main id='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/login'
                            element={<Login onLoginSubmit={onLoginSubmit} />}
                        />
                        <Route
                            path='/logout'
                            // element={<Logout onLogout={onLogout} />}
                            element={<Logout />}
                        />
                        <Route
                            path='/register'
                            element={
                                <Register onRegisterSubmit={onRegisterSubmit} />
                                // <Register />
                            }
                        />
                        <Route
                            path='/createGame'
                            element={
                                <CreateGame
                                    onCreateGameSubmit={onCreateGameSubmit}
                                />
                            }
                        />
                        <Route
                            path='/catalog'
                            element={<Catalog games={games} />}
                        />
                        <Route
                            path='/catalog/:gameId'
                            element={<GameDetails />}
                        />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
