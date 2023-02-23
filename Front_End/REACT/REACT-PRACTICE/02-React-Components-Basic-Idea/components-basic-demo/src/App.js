import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const movies=[{title: 'Man of Steel', year:2008,cast:["Henry", "Pesho"]},
{title: 'Harry Potter', year:2008,cast:["Daniel", "Ema"]}];
 
return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );

  
}

export default App;
