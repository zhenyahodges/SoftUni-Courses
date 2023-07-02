import { useEffect, useState } from 'react';
import { deleteLike, getOneLike, getSuggestionLikesCount, postLike } from '../../../../utils/likesService';
import { getCards } from '../../../../utils/cardService';

export default function SuggLikesItem({ userId, token, ownerId, id, author,cardId }) {
    const suggId = id;
   
    const [hasLiked, setHasLiked] = useState(false);
    const [count, setCount] = useState(0);
    const [cardOwner,setCardOwner] = useState('');
    
    // GET SUGGLIKE COUNT
    useEffect(() => {
        async function fetchSuggestionsCount(){
            const res=await getSuggestionLikesCount(suggId);
            setCount(res);
        }
        fetchSuggestionsCount();     
    }, [id, setCount, suggId]);

    useEffect(() => {
        const searchQuery = encodeURIComponent(`suggestionId="${suggId}"`);
        const url = `http://localhost:3030/data/likes?where=${searchQuery}`;
        fetch(url, {
            method: 'GET',
        })
            .then((res) => {
                if (res.status === 404) {
                    setHasLiked(false);
                    return null;
                } else if (!res.ok) {
                    throw new Error(`${res.status} - ${res.statusText}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                    const result = data.find((item) => item.userId === userId);
                    if (result !== undefined && result !== null) {
                        return setHasLiked(true);
                    } else {
                        setHasLiked(false);
                        return null;
                    }
                } else {
                    return setHasLiked(false);
                }
            })
            .catch((err) => {
                console.log(`Error: ${err.message}`);
            });
    }, [suggId, userId]);

    useEffect(()=>{
        async function fetchCardOwner(){
            const res=await getCards(cardId);         
            setCardOwner(res._ownerId);
        }
        fetchCardOwner();
        
    },[cardId]);

 
    let canLike=false;
    if(token && (author !== userId) &&(userId!==cardOwner)){
        canLike = true;
    }

    async function onLike() {
        await postLike(suggId, token, userId);
        setCount(count + 1);
        setHasLiked(true);
    }

    async function onDislike() {
        const likeId = await getOneLike(suggId, userId);
        await deleteLike(likeId, token);

        setCount(count - 1);
        setHasLiked(false);
    }

    return (
        <p className='sugg-ranking'>
            <span className='rank'>{count? count:0}</span>

            {/* LIKE DISABLED FOR GUESTS & OWNERS  */}
            {canLike && !hasLiked && (
                <span className='sugg-like-link' onClick={() => onLike()}>
                    <i className='like fa-solid fa-circle-up'></i>
                </span>
            )}
            {/* DISLIKE */}
            {canLike && hasLiked && (
                <span className='sugg-like-link' onClick={() => onDislike()}>
                    <i className='fa-solid fa-circle-down'></i>
                </span>
            )}
        </p>
    );
}
