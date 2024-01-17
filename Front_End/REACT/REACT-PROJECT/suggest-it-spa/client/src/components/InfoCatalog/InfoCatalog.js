import { useLoaderData } from 'react-router-dom';
import { getAllInfos } from '../../services/infoCatalogService';
import InfoItem from './InfoItem/InfoItem';

export async function loader() {
    try {
        const infos = await getAllInfos();
        return { infos, error: null };
    } catch (error) {
        return { infos: null, error: 'Server is unavailable' };
    }
}

export default function InfosCatalog() {
    const { infos, error } = useLoaderData();

    return (
        <section className='catalog window'>
            <h2 className='catalog title'>Infos Catalog</h2>

            <div className='catalog-wrapper'>
                {error ? (
                    <h3
                        style={{ marginLeft: '44%' }}
                        className='no-articles-message'
                    >
                        No articles yet
                    </h3>
                ) : infos?.length ? (
                    infos.map((i) => <InfoItem key={i._id} {...i} />)
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
