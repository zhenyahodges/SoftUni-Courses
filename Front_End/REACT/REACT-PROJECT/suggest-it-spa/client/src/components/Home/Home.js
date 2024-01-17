import { useLoaderData } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { getAllCards } from '../../services/cardService';
import CatalogItem from '../Catalog/CatalogItem/CatalogItem';
import Sample from './Sample/Sample';
import NavButton from '../Buttons/NavButton/NavButton';

export async function loader() {
    try {
        const cards = await getAllCards();
        return { cards, error: null };
    } catch (error) {
        return { cards: [], error: error.message };
    }
}

export default function Home() {
    const { cards, error } = useLoaderData();
    const firstCard = cards.length > 0 ? cards.slice(0, 2) : [];

    return (
        <section className='welcome window'>
            <Welcome />
            <div className='catalog-wrapper'>
                {error ? (
                    <>
                        <h3 style={{ marginLeft: '40%',color:'red', textAlign:'center'}}>**Please run the server locally**</h3>
                        <Sample />
                    </>
                ) : (
                    firstCard.length > 0 ?
                    firstCard.map((c) => <CatalogItem key={c._id} {...c} />)
                    :<Sample />
                )}
            </div>

            <div className='more'>
                <NavButton
                    path='cards'
                    classBtn='btn highlight catalog'
                    id='catalog-btn'
                    name='Catalog'
                />
            </div>
        </section>
    );
}
