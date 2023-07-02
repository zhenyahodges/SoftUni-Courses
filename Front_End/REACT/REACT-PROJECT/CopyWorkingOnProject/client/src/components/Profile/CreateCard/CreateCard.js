import { redirect } from 'react-router-dom';
import { requireAuth } from '../../../utils/requireAuth';
import CreateCardForm from './CreateCardForm';
import { createNewCard } from '../../../utils/cardService';

export async function action({ request }) {
    const { userId, token } = await requireAuth();
    if (window.confirm('Are you sure you want to submit?')) {
        const formData = await request.formData();
        const brand = formData.get('brand');

        try {
            if (token) {
                await createNewCard(token, brand, userId);
                return redirect(`/users/${userId}`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
    }else{
        return redirect(`/users/${userId}/create`);
    }
}

export default function CreateCard() {

    return (
        <section className='user create'>
            <h2 className='user-title'>Create</h2>
            <div className='user-create-wrapper'>
            <CreateCardForm/>
            </div>
        </section>
    );
}
