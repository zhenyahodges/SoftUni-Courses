import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const baseUrl = 'https://swapi.dev/api';

export const CharacterFilms = () => {
    const { characterId } = useParams();
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then((res) => res.json())
            .then((data) => {
                setFilms(data.results);
            });
    }, [characterId]);

    return (
        <>
            <h1>Character Films</h1>

            {films.map((x) => (
                <li key={x.url}>{x.title}</li>
            ))}
        </>
    );
};
