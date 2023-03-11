import Movie from "./Movie";


export default function MovieList({
    movies,
}){

    const firstMovie=movies[0]

    return (
        <Movie
        title={firstMovie.title}
        year= {firstMovie.year}
        plot={firstMovie.plot}
        posterUrl={firstMovie.posterUrl}
        director={firstMovie.director}
        />
    );
};