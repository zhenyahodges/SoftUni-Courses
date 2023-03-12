// import React from 'react';
// import { createElement } from 'react';
import Movie from './Movie';

export default function MovieList({ 
    // destructuring the *props* obj:
    movies,
    onMovieDelete,
    onMovieSelect,
 }) {
    // const movieElements=[];
    // for(const movie of movies){
    //     // movieElements.push(React.createElement(Movie,movie));
    //     movieElements.push(<li><Movie {...movie}/></li>);
    // }

    // s promenliva
    // let movieList = movies.map((movie) => (
    //     <li><Movie {...movie} /></li>
    // ));

    
    // !!!!!!!!! map/for each etc+key always !!!!!!!!!!
    return [
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Movie  {...movie}
                    onMovieDelete={onMovieDelete}
                    onMovieSelect={onMovieSelect}
                    />                    
                </li>
            ))}
        </ul>,
    ];
}
