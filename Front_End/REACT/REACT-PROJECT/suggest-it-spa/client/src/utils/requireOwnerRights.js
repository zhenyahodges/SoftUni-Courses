import { redirect } from 'react-router-dom';
import { getCard } from '../services/cardService';
import { getInfo } from '../services/infoCatalogService';

export async function requireOwnerRights(cardId, cat) {
    const res =
        cat === 'card' ? await getCard(cardId) : await getInfo(cardId);
    const user = JSON.parse(localStorage.getItem('user'));

    const hasOwnerRights = user.userId === res._ownerId;

    if (hasOwnerRights) {
        return hasOwnerRights;
    } else {
        if (cat === 'card') {
            throw redirect(`/cards/${cardId}?message=You are not authorised!`);
        } else {
            throw redirect(`/infos/${cardId}?message=You are not authorised!`);
        }
    }
}
