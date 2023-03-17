import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Catalog } from './components/Catalog/Catalog';

function App() {
    return (
        <div id='box'>
            <Header />
            {/* <!-- Main Content --> */}
            <main id='main-content'>
              {/* <Home></Home> */}
              {/* <Login/> */}
              {/* <Register/> */}
              {/* <CreateGame/> */}
              {/* <Catalog/> */}
            </main>
      
            <Footer />
        </div>
    );
}

export default App;
