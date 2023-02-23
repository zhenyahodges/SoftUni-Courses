import "./App.css";
import Movie from "./components/Movie";

function App() {
  const movies=[{title: 'Man of Steel', year:2008,cast:["Henry", "Pesho"]},
{title: 'Harry Potter', year:2008,cast:["Daniel", "Ema"]}];
  return (
    <div className="App">
      <h1>Movie List</h1>
      <Movie title={movies[0].title} year={movies[0].year} cast={movies[0].cast}/>
      <Movie title={movies[1].title} year={movies[1].year} cast={movies[1].cast}/>
    </div>
  );
}

export default App;
