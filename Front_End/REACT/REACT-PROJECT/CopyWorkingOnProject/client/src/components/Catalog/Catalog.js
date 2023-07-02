import { useLoaderData } from 'react-router-dom';
import { getCards } from '../../utils/cardService';
import CatalogItem from './CatalogItem/CatalogItem';

export async function loader() {
      const cards = await getCards();
    return cards;
}

export default function Catalog() {
    const cards = useLoaderData();

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Catalog</h2>

            <div className='catalog-wrapper'>
                {cards ? (
                    cards.map((c) => <CatalogItem key={c._id} {...c} />)
                ) : (
                    <h3 style={{ marginLeft: '44%' }}>No articles yet</h3>
                )}
            </div>
        </section>
    );
}
