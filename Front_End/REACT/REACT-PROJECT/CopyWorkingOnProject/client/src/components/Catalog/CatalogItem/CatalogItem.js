import { Link, useNavigation } from 'react-router-dom';

export default function CatalogItem(props) {
    const navigation = useNavigation();
    const id = props._id;
    const brand = props.brand;

    return (
        <article key={id} id={id} className='sugg-card catalog-view-card'>
            <header className='card-header'>
                <h5 className='brand'>{brand}</h5>
            </header>

            <main className='card-main catalog-view-card'></main>
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
