import './App.css';
import EventInfo from './components/EventInfo';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Speakers from './components/Speakers';
import Tickects from './components/Tickets';
import Schedule from './components/Schedule';
import Footer from './components/Footer';


function App() {
  return (
  <div>
   <Navigation/>
    <Header/>
  <div className="container">
    <EventInfo/>
    <Speakers/>
  </div>
    <Tickects/>
    <Schedule/>
    <Footer/>
  </div>
  );
}

export default App;