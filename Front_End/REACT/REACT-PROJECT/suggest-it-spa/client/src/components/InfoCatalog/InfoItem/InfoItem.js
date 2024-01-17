import { Link, useNavigation } from 'react-router-dom';

export default function InfoItem({
    title,
    web,
    text,
    _id,
}) {
    const navigation = useNavigation();

    return (
        <article
            key={_id}
            className='sugg-card details catalog-view-card'
            id={_id}
        >
            <header className='card-header'>
                <h5 className='brand'>{title}</h5>
            </header>

            <main className='card-main catalog-view-card'>
                <p>{web}</p>
                <p>{text}</p>
            </main>
            <footer className='card-footer suggs-card foot'>
                <div className='card-footer-content'>
                    <div className='card-footer-links-wrapper'>
                        <Link
                            to={`/infos/${_id}`}
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
