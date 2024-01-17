import { useLoaderData } from 'react-router-dom';
import { getUserInfos } from '../../../services/infoCatalogService';
import { requireAuth } from '../../../utils/requireAuth';
import InfoItem from '../../InfoCatalog/InfoItem/InfoItem';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const infos = await getUserInfos(userId, token);
    return infos;
}

export default function UserInfos() {
    const infos = useLoaderData();

      return (
        <section className='user published'>
            <h2 className='user-title'>Published Infos</h2>
            
            <div className='user-article-wrapper'>
                {infos?.length ? (
                    infos.map((i) => <InfoItem key={i._id} {...i} />)
                ) : (
                    <h3>No items yet</h3>
                )}                
            </div>
        </section>
    );
}
