import { redirect, useLoaderData } from 'react-router-dom';
import { editCard, getCards } from '../../../../utils/cardService';
import { requireAuth } from '../../../../utils/requireAuth';
import EditCardItemForm from './EditCardItemForm';

export async function loader({ request, params }) {
    await requireAuth(request);
    const res = await getCards(params.cardId);
    return res;
}

export async function action({ request, params }) {
    const { token } = await requireAuth();
    const cardId = params.cardId;

    if (window.confirm('Are you sure you want to submit?')) {
        const formData = await request.formData();
        const brand = formData.get('brand');

        try {
            if (token) {
                await editCard(token, brand, cardId);
                return redirect(`/cards/${cardId}`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
    } else {
        return redirect(`/cards/${cardId}`);
    }
}

export default function EditCardItem() {
    const res = useLoaderData();
    const brand = res.brand;

    return (
        <section className='user create edit'>
            <h2 className='user-title'>Edit</h2>

            <div className='user-create-wrapper'>
                <EditCardItemForm brand={brand} />
            </div>
        </section>
    );
}
