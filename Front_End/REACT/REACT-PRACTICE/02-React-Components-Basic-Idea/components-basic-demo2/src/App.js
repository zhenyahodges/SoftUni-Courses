import './App.css';
import Counter from './components/Counter';
import Movie from './components/Movie';
import Timer from './components/Timer';

function App() {
    const movies = [
        { title: 'Man of Steel', year: 2015, cast: ['Actor 1', 'Actor 2'] },
        { title: 'Harry Potter', year: 2015, cast: ['Actor 3', 'Actor 4'] },
    ];

    return (
        <div className='App'>
            <h1 style={{ color: 'red' }}>React Demo</h1>

            <Counter canReset />

            <h2>Timer</h2>
            <Timer start={5} />

            <h2>Movie List</h2>
            <Movie
                title={movies[0].title}
                year={movies[0].year}
                cast={movies[0].cast}
            />

            <Movie
                title={movies[1].title}
                year={movies[1].year}
                cast={movies[1].cast}
            />
        </div>
    );
}

export default App;
