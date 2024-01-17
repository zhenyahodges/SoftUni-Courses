import { Link, useNavigate } from 'react-router-dom';
import { onDeleteSuggestion } from '../../../../services/suggestionService';
import SuggLikesItem from './SuggLikesItem';
import { useEffect, useState } from 'react';
import { useCurrentUser } from '../../../../hooks/useCurrentUser';

export default function SuggestionDetail(props) {
    const navigate = useNavigate();
    const [isTimedOut, setIsTimedOut] = useState(false);

    // use Context info
    const { currentToken,currentUserId } = useCurrentUser();      
    const token=currentToken;
    const userId=currentUserId;

    // use props info
    const ownerId = props._ownerId;
    const suggestion = props.suggestion;
    // const likes = props.likes;
    const cardId = props.cardId;
    const createdOn = props._createdOn;
    // const updatedOn = props._updatedOn;
    const id = props._id;

    let author;
    if (props.author) {
        author = props.author._id;
    }

    // owner of suggestion can edit/delete it within 1min period only and only if logged in.
    useEffect(() => {
        const timer = setInterval(() => {
            const timePassed = new Date() - new Date(createdOn) > 60000;

            if (timePassed || !token) {
                setIsTimedOut(true);
                clearInterval(timer);
            } else if(!timePassed && token) {
                setIsTimedOut(false);
            }
        }, 10);
    }, [createdOn, token]);

    const isAuthorized = Boolean(token);
    const canEditDeleteSugg = ownerId === userId && !isTimedOut;

    const infos = {
        userId,
        token,
        ownerId,
        id,
        author,
        cardId,
    };

    return (
        <li className='sugg-item'>
            <div className='sugg-item-wrapper'>
                <p className='sugg-text'>
                    {suggestion}

                    {/* <!-EDIT/DELETE SUGG-IF OWNER & NOT TIMED OUT --> */}
                    {isAuthorized && canEditDeleteSugg && (
                        <span className='user-sug-list'>
                            <Link
                                to={`/suggestions/${id}`}
                                className='edit-user-sugged link'
                            >
                                Edit
                            </Link>
                            <Link
                                onClick={() => {
                                    if (
                                        window.confirm(
                                            'Are you sure you want to delete?'
                                        )
                                    ) {
                                        onDeleteSuggestion(id, token);
                                        navigate(`/cards/${cardId}`);
                                    }
                                }}
                                className='delete-user-sugged link'
                            >
                                Delete
                            </Link>
                        </span>
                    )}
                </p>

                <SuggLikesItem {...infos} />
            </div>
        </li>
    );
}
