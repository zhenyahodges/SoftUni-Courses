import { useEffect } from 'react';
import styles from './Movie.module.css';

export default function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    onMovieDelete,
    onMovieSelect,
    selected,
}) {
    useEffect(() => {
        console.log(`Movie ${title} - mounted`);

        return () => {
            console.log(`Movie ${title} - unmounted`);
        };
    }, [title]);
    // useEffect vinagi s masiv!!

    useEffect(() => {
        console.log(`Movie ${title} - updated`);
    }, [selected, title]);

    return (
        <article className={styles['movie-article']}>
            <h3>
                {title}, {year},{selected && <h4>SELECTED</h4>}
            </h3>
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Select</button>
            </footer>
        </article>
    );
}
