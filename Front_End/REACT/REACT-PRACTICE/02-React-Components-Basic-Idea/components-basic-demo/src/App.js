import "./App.css";
import Counter from "./components/Counter";
import MovieList from "./components/MovieList";
import Timer from "./components/Timer";

function App() {
  const movies=[{title: 'Man of Steel', year:2008,cast:["Henry", "Pesho"]},
{title: 'Harry Potter', year:2008,cast:["Daniel", "Ema"]}];
 
return (
    <div className="App">
      <h1>React Demo</h1>

      <Counter canReset/>

      {/* <Timer start={5}/> */}
      <Timer start={0}/>
      {/* <Timer start={10}/> */}

      <MovieList movies={movies}/>
    </div>
  );

  
}

export default App;
