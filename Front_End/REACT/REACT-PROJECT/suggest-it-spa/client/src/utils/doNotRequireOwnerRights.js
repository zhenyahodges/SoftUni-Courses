import { redirect } from 'react-router-dom';
import { getCard } from '../services/cardService';

export async function doNotRequireOwnerRights(cardId) {
    const res = await getCard(cardId);
    const user = JSON.parse(localStorage.getItem('user'));

    const noOwnerRights = user.userId !== res._ownerId;

    if (noOwnerRights) {
        return noOwnerRights;
    } else {
        throw redirect(`/cards/${cardId}?message=You cannot vote for your own card!`);
    }
}
