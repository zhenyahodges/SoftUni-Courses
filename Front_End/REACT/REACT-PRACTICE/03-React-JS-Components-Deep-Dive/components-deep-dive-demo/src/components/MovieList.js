import React from 'react';
// import { createElement } from 'react';
import Movie from './Movie';

export default function MovieList({ 
    movies,
    onMovieDelete,
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

    return [
        <ul>
            {/* map/for each etc+key always ! */}
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Movie  {...movie} onMovieDelete={onMovieDelete}/>                    
                </li>
            ))}
        </ul>,
    ];
}
