import { useLoaderData } from 'react-router-dom';
import { getAllCards } from '../../services/cardService';
import CatalogItem from './CatalogItem/CatalogItem';

export async function loader() {
    try {
        const cards = await getAllCards();
        return { cards, error: null };
    } catch (error) {
        return { cards: null, error: 'Server is unavailable' };
    }
}

export default function Catalog() {
    const { cards, error } = useLoaderData();

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            <div className='catalog-wrapper'>
                {error ? (
                    <h3
                        style={{ marginLeft: '44%' }}
                        className='no-articles-message'
                    >
                        No articles yet
                    </h3>
                ) : cards?.length ? (
                    cards.map((c) => <CatalogItem key={c._id} {...c} />)
                ) : (
                    <h3
                        style={{ marginLeft: '44%' }}
                        className='no-articles-message'
                    >
                        No articles yet
                    </h3>
                )}
            </div>
        </section>
    );
}
