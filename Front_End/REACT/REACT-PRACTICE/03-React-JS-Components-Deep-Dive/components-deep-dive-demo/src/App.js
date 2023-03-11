import MovieList from './components/MovieList';
import {movies} from './movies';

function App() {

  return (
    <div>
      <h1>Hello</h1>

      <MovieList movies={movies.slice(0,10)}/>
    </div>
  );
}

export default App;
