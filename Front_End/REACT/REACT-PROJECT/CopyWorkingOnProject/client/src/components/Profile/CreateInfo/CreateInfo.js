import {  redirect} from 'react-router-dom';
import { createNewInfo } from '../../../utils/infoCatalogService';
import { requireAuth } from '../../../utils/requireAuth';
import CreateInfoForm from './CreateInfoForm';

export async function action({ request }) {
    const { userId, token } = await requireAuth();   
    if (window.confirm('Are you sure you want to submit?')) {
        const formData = await request.formData();
        const title = formData.get('title');
        const web = formData.get('web');
        const text = formData.get('text');
        try {
            if (token) {
                await createNewInfo(token, title, web, text);
                return redirect(`/users/${userId}/userInfos`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
    }else{
        return redirect(`/users/${userId}/createInfo`);
    }
}

export default function CreateCard() {
    return (
        <section className='user create'>
            <h2 className='user-title'>Create</h2>
            <div className='user-create-wrapper'>
                <CreateInfoForm />
            </div>
        </section>
    );
}
