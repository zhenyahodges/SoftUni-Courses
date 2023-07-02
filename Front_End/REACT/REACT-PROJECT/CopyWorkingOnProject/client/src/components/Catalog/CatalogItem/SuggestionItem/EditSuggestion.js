import { Form, redirect, useLoaderData, useNavigation } from 'react-router-dom';
import { requireAuth } from '../../../../utils/requireAuth';
import { getOneSuggestions, onEditSuggestion } from '../../../../utils/suggestionService';

let cardIds;

export async function loader({ request, params }) {
    const { token } = await requireAuth(request);
    const suggestionId = params.suggestionId;
    const res = await getOneSuggestions(suggestionId, token);
    return res;
}

export async function action({ request, params }) {
    if (window.confirm('Are you sure you want to submit?')) {
        const { token } = await requireAuth();
        const formData = await request.formData();
        const suggestion = formData.get('suggestion');
        const suggestionId = params.suggestionId;
        const cardId = cardIds;

        try {
            if (token) {
                await onEditSuggestion(token, cardId, suggestion, suggestionId);
                return redirect(`/cards/${cardId}`);
            } else {
                redirect('login');
            }
        } catch (err) {
            return err.message;
        }
    } else {
        return redirect(`/cards/${cardIds}`);
    }
}

export default function EditSuggestion() {
    const navigation = useNavigation();
    const res = useLoaderData();
    const {
        // _ownerId,
        suggestion,
        cardId,
        // _createdOn,
        // _updatedOn,
        // _id,
        // author,
    } = res[0];

    cardIds = cardId;

    return (
        <section className='add-sugg form-wrapper'>
            <Form method='post' id='add-form' className='add-sugg form'>
                <h2>Edit Suggestion</h2>

                <label htmlFor='suggestion'>Your Suggestion:</label>

                <textarea
                    className='sugg-text-add'
                    id='suggestion'
                    form='add-form'
                    name='suggestion'
                    rows='4'
                    cols='50'
                    maxLength='150'
                    placeholder='Type your suggestion here'
                    required
                    defaultValue={suggestion}
                    autoFocus
                ></textarea>
                {/* <span className='add sugg author' id='add-sugg-author'>
                    Me
                </span> */}
                <button
                    className='add-sugg btn dark subm'
                    form='add-form'
                    id='btn-add-form'
                    disabled={navigation.state === 'submitting'}
                >
                    {navigation.state === 'submitting'
                        ? 'Submitting...'
                        : 'Submit'}
                </button>
            </Form>
        </section>
    );
}
