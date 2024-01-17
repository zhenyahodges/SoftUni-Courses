import { redirect, useLoaderData } from 'react-router-dom';
import { editInfo, getInfo } from '../../../../services/infoCatalogService';
import { requireAuth } from '../../../../utils/requireAuth';
import EditInfoForm from './EditInfoForm';
import { requireOwnerRights } from '../../../../utils/requireOwnerRights';

export async function loader({ request, params }) {
    await requireAuth(request);

    const infoCardId = params.infoId;
    const res = await getInfo(infoCardId);

    const cat = 'info';
    await requireOwnerRights(infoCardId, cat);
    
    return res;
}

export async function action({ request, params }) {
    const { token } = await requireAuth();
    const infoId = params.infoId;

    if (window.confirm('Are you sure you want to submit?')) {
        const formData = await request.formData();
        const title = formData.get('title');
        const web = formData.get('web');
        console.log(web);
        const text = formData.get('text');

        try {
            if (token) {
                await editInfo(token, title, web, text, infoId);
                return redirect(`/infos/${infoId}`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
    } else {
        return redirect(`/infos/${infoId}/edit`);
    }
}

export default function EditInfoItem() {
    const res = useLoaderData();
    const title = res.title;
    const web = res.web;
    const text = res.text;

    return (
        <section className='user create edit'>
            <h2 className='user-title'>Edit</h2>

            <div className='user-create-wrapper'>
                <EditInfoForm title={title} web={web} text={text} />
            </div>
        </section>
    );
}
