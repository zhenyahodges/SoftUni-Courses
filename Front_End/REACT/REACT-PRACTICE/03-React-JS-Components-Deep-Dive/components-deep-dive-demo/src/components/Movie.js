import { useEffect } from "react";

export default function Movie({ id,title, year, plot, posterUrl, director,onMovieDelete }) {
useEffect(()=>{
    console.log(`Movie ${title} - mounted`);
},[]); 
// useEffect vinagi s masiv!!

    return (
        <article>
            <h3>
                {title}, {year}
            </h3>
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
                <button onClick={()=>onMovieDelete(id)}>Delete</button>
               {/* <button onClick={()=>onMovieSelect(id)}>Select</button> */}
            </footer>
        </article>
    );
}
