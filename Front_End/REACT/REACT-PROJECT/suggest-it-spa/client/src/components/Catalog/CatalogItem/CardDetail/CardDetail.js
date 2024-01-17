import { useLoaderData, useNavigate } from 'react-router-dom';
import { deleteCard, getCard } from '../../../../services/cardService';
import SuggestionDetail from '../SuggestionItem/SuggestionDetail';
import { useEffect, useState } from 'react';
import { getCardSuggestions } from '../../../../services/suggestionService';
import { useCurrentUser } from '../../../../hooks/useCurrentUser';
import PrintButton from '../../../Buttons/PrintButton/PrintButton';
import EmailBtn from '../../../Buttons/EmailBtn/EmailBtn';
import DeleteBtn from '../../../Buttons/DeleteBtn/DeleteBtn';
import RenderLink from '../../../RenderLink/RenderLink';

export async function loader({ request, params }) {
    const cardId = params.cardId;
    const res = await getCard(cardId);
    const user = JSON.parse(localStorage.getItem('user'));

    const suggestions = await getCardSuggestions(cardId);
    const message = new URL(request.url).searchParams.get('message');
    const result = {
        res,
        suggestions,
        message,
        user,
    };
    return result;
}

export default function CardDetail() {
    const navigate = useNavigate();
    const { res, suggestions, message } = useLoaderData();
    const { currentUser, currentToken, currentUserId } = useCurrentUser();
    const token = currentToken;
    const userId = currentUserId;

    const ownerId = res._ownerId;
    const cardId = res._id;
    const brand = res.brand;
    const createdOn = res._createdOn;
    // const updatedOn = res._updatedOn;
    const [isTimedOut, setIsTimedOut] = useState(false);
    // const [isExpired,setIsExpired]=useState(false);

    // owner can edit card only within 1min period
    useEffect(() => {
        const timer = setInterval(() => {
            const timePassed = new Date() - new Date(createdOn) > 60000;

            if (timePassed) {
                setIsTimedOut(true);
                clearInterval(timer);
            } else {
                setIsTimedOut(false);
            }
        }, 10);
    }, [createdOn]);

    let isAuthorized = false;
    let isOwner = false;
    let canEditCard = false;

    if (currentUser !== 'Guest') {
        isAuthorized = token;
        isOwner = ownerId === userId;
        canEditCard = ownerId === userId && !isTimedOut;
    }

    const onDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            await deleteCard(cardId, token);
            navigate('/cards');
        }
    };

    return (
        <section className='details-view container'>
            <h2>Details</h2>
            {message && <h3 style={{ color: 'red' }}>{message}</h3>}

            {
                <article className='sugg-card details detailed-card'>
                    <header className='card-header details-header'>
                        <h5 className='brand'>{brand}</h5>
                    </header>

                    <main className='card-main'>
                        <ul className='sugg-list'>
                            {/* SUGGESTIONS */}
                            {suggestions &&
                                suggestions.length > 0 &&
                                suggestions.map((s) => (
                                    <SuggestionDetail key={s._id} {...s} />
                                ))}
                        </ul>
                    </main>

                    <footer className='card-footer sugg-card foot'>
                        <div className='card-footer-content'>
                            <p className='card-footer-text'>
                                Thank you for your contributions!
                            </p>

                            <div className='card-footer-links-wrapper'>
                                {/* ADD-SUGGESTION LINK: visible for LOGGED (NOT OWNERS?) */}
                                {isAuthorized && !isOwner && (
                                    <RenderLink
                                        to={`/cards/${cardId}/suggest`}
                                        classN={'add-sugg-link'}
                                        text={'Suggest'}
                                    />
                                )}

                                {/*------- EMAIL&P PRINT */}
                                {isAuthorized && isOwner && (
                                    <>
                                        <PrintButton />
                                        <EmailBtn />
                                    </>
                                )}

                                {/*  VISIBLE FOR LOGGED OWNER ONLY */}
                                {/* <p className='countdown-text'>
                                    <span className='count-end'>20</span> days
                                    left
                                </p> */}

                                {/* if POLL ENDED  */}
                                {/* <p className="countdown-text">Poll ended</p> */}

                                {/* EDIT/DELETE CARD VISIBLE FOR OWNER IF NOT TIMED OUT */}
                                {isAuthorized && isOwner && (
                                    <>
                                        {canEditCard && (
                                            <RenderLink
                                                to={`/cards/${cardId}/edit`}
                                                classN={
                                                    'btn-sm card-details edit-card'
                                                }
                                                text={'Edit'}
                                            />
                                        )}
                                        <DeleteBtn
                                            to={'/'}
                                            onClick={onDelete}
                                            text={'Delete'}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </footer>
                </article>
            }
        </section>
    );
}
