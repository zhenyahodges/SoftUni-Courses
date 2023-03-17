import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Catalog } from './components/Catalog/Catalog';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService';


function App() {
const [games,setGames]=useState([]);

useEffect(()=>{
gameService.getAll()
.then(result=>{
  console.log(result);
  setGames(result);
});
},[]);

    return (
        <div id='box'>
            <Header />
            {/* <!-- Main Content --> */}
            <main id='main-content'>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/createGame' element={<CreateGame/>} />
                <Route path='/catalog' element={<Catalog games={games}/>} />
              </Routes>      
            </main>
      
            <Footer />
        </div>
    );
}

export default App;
