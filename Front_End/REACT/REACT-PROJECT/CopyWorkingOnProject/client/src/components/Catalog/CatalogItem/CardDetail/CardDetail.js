import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';
import {
    getCards,
    onDeleteCard,
} from '../../../../utils/cardService';
import { EmailShareButton } from 'react-share';
import SuggestionDetail from '../SuggestionItem/SuggestionDetail';
import { useEffect, useState } from 'react';
import { getCardSuggestions } from '../../../../utils/suggestionService';

// let cardId;

export async function loader({ params }) {
   const cardId = params.cardId;
    const res = await getCards(cardId);
    const suggestions = await getCardSuggestions(cardId);
    const result = {
        res,
        suggestions,
    };
    return result;
}

export default function CardDetail() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const { res, suggestions } = useLoaderData();

    const ownerId = res._ownerId;
    const cardId = res._id;
    const brand = res.brand;
    const createdOn = res._createdOn;
    // const updatedOn = res._updatedOn;
    const [isTimedOut, setIsTimedOut] = useState(false);
    // const [isExpired,setIsExpired]=useState(false);

    // owner can edit/delete card only within 1min period
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

    const user = JSON.parse(localStorage.getItem('user'));

    let userId;
    let token;
    if (user) {
        ({ token, userId } = user);
    }

    const isAuthorized = Boolean(token);
    const isOwner = ownerId === userId;
    const canEditDeleteCard = ownerId === userId && !isTimedOut;

    const onDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            await onDeleteCard(cardId, token);
            navigate(-1);
        }
    };

    function onPrint(e) {
        e.preventDefault();
        window.print();
        return false;
    }

    return (
        <section className='details-view container'>
            <h2>Details</h2>
            {
                <article className='sugg-card details detailed-card'>
                    <header className='card-header details-header'>
                        <h5 className='brand'>{brand}</h5>
                    </header>

                    <main className='card-main'>
                        <ul className='sugg-list'>
                            {/* SUGGESTIONS */}
                            {suggestions &&
                                suggestions.map((s) => (
                                    <SuggestionDetail key={s._id} {...s}/>
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
                                    <Link
                                        to={`/cards/${cardId}/suggest`}
                                        className='add-sugg-link'
                                    >
                                        Suggest
                                    </Link>
                                )}

                                {/*------- EMAIL&P PRINT */}
                                {isAuthorized && isOwner && (
                                    <>
                                        <Link
                                            to='/'
                                            className='print details'
                                            onClick={onPrint}
                                        >
                                            Print
                                        </Link>

                                        <EmailShareButton>
                                            <span className='print details'>
                                                Email
                                            </span>
                                        </EmailShareButton>
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
                                {isAuthorized && canEditDeleteCard && (
                                    <>
                                        <Link
                                            to={`/cards/${cardId}/edit`}
                                            className='btn-sm card-details edit-card'
                                            disabled={
                                                navigation.state === 'loading'
                                            }
                                        >
                                            {navigation.state === 'loading'
                                                ? 'Loading...'
                                                : 'Edit'}
                                        </Link>
                                        <button
                                            to='/'
                                            className='btn-sm card-details delete-card'
                                            onClick={onDelete}
                                            disabled={
                                                navigation.state === 'loading'
                                            }
                                        >
                                            {navigation.state === 'loading'
                                                ? ':Loading...'
                                                : 'Delete'}
                                        </button>
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
