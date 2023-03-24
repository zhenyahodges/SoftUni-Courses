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
import { GameDetails } from './components/GameDetails/GameDetails';
import { AuthContext } from './contexts/AuthContext';

function App() {
    const nagivate = useNavigate();
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        gameService.getAll().then((result) => {
            console.log(result);
            setGames(result);
        });
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);

        //  add to state
        setGames((state) => [...state, newGame]);

        // redirect to gatalog
        nagivate('/catalog');
    };

    const onLoginSubmit = async (data) => {
        e.preventDefault();
    };

    return (
        <AuthContext.Provider>
            <div id='box'>
                <Header />
                {/* <!-- Main Content --> */}
                <main id='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
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
