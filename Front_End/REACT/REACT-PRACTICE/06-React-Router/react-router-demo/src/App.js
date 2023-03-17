import { Routes, Route } from 'react-router-dom';

import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
