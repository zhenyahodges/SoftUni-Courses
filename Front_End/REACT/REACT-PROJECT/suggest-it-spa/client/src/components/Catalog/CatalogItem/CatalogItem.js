import { Link, useNavigation } from 'react-router-dom';
import { getCardSuggestions } from '../../../services/suggestionService';
import SuggestionDetail from './SuggestionItem/SuggestionDetail';
import { useEffect, useState } from 'react';

export default function CatalogItem(props) {
    const navigation = useNavigation();
    const id = props._id;
    const brand = props.brand;
    const [suggestions, setSuggestions] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const suggestions = await getCardSuggestions(id);           
                setSuggestions(suggestions);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [id]);

    return (
        <article key={id} id={id} className='sugg-card catalog-view-card'>
            <header className='card-header'>
                <h5 className='brand'>{brand}</h5>
            </header>

            <main className='card-main misted'>
                <ul className='sugg-list'>
                    {/* SUGGESTIONS */}
                    {
                    (suggestions &&
                        suggestions.length > 0) &&
                        suggestions.map((s) => (
                            <SuggestionDetail key={s._id} {...s} />
                        ))}
                </ul>
            </main>
            <footer className='card-footer suggs-card foot'>
                <div className='card-footer-content'>
                    <div className='card-footer-links-wrapper'>
                        <Link
                            to={`/cards/${id}`}
                            className='details-link'
                            disabled={navigation.state === 'loading'}
                        >
                            {navigation.state === 'loading'
                                ? 'Loading...'
                                : 'Details'}
                        </Link>
                    </div>
                </div>
            </footer>
        </article>
    );
}
