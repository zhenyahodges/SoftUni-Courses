import { useLoaderData } from 'react-router-dom';
import { requireAuth } from '../../../utils/requireAuth';
import { getUserSuggestions } from '../../../utils/suggestionService';
import SuggestionDetail from '../../Catalog/CatalogItem/SuggestionItem/SuggestionDetail';

export async function loader({ request }) {
    const { userId, token } = await requireAuth(request);
    const res = await getUserSuggestions(userId, token);
    return res;
}

export default function UserSuggs() {
    const suggestions = useLoaderData();

    return (
        //   {/* <!-- || USER-OWNER SUGGESTIONS --> */}
        <section className='user suggested'>
            <h2 className='user-title'>User Suggestions</h2>

            <div className='user-sugged-wrapper'>
                <ul className='user-sugged-list'>
                    {suggestions ? (
                        suggestions.map((s) => (
                            <SuggestionDetail key={s._id} {...s} />
                        ))
                    ) : (
                        <h3>No items yet</h3>
                    )}
                </ul>
            </div>
        </section>
    );
}
