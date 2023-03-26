import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

// import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';

import { gameServiceFactory } from '../../services/gameService';
import { AddComment } from './AddComment/AddComment';
import * as commentService from '../../services/commentService';

export const GameDetails = () => {
    const { gameId } = useParams();
    const { userId, isAuthenticated } = useAuthContext();
    const [game, setGame] = useState({});

    // const [comments, setComments] = useState([]);
    const gameService = useService(gameServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            gameService.getOne(gameId),
            commentService.getAll(gameId),
        ]).then(([gameData,comments]) => {
            setGame(
                {...gameData,
                comments}
                );
        });

        // gameService.getOne(gameId).then((result) => {
        //     setGame(result);
        //     // return commentService.getAll(gameId);
        // });
        // .then((result) => {
        //     setComments(result);
        // });
    }, [gameId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(gameId, values.comment);

        setGame(state=>({
            ...state,
            comments: [...state.comments,response]
        }));

        // await commentService.create({
        //     gameId,
        //     username,
        //     comment,
        // });

        // addCOMMENT
        //     const result = await gameService.addComment(gameId, {
        //         username,
        //         comment,
        //     });

        //     setGame((state) => ({
        //         ...state,
        //         comments: { ...state.comments, [result._id]: result },
        //     }));

        //     setUsername('');
        //     setComment('');
    };

    const isOwner = game._ownerId === userId;

    const onDeleteClick = async () => {
        // confirm
        await gameService.delete(game._id);

        // TODO DELETE FROM STATE

        navigate('/catalog');
    };

    return (
        <section id='game-details'>
            <h1>Game Details</h1>
            <div className='info-section'>
                <div className='game-header'>
                    <img className='game-img' src={game.imageUrl} alt='' />
                    <h1>{game.title}</h1>
                    <span className='levels'>MaxLevel: {game.maxLevel}</span>
                    <p className='type'>{game.category}</p>
                </div>

                <p className='text'>{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className='details-comments'>
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {/* {comments.map((x) => ( */}
                        {game.comments &&
                          (game.comments).map((x) => (
                                <li key={x._id} className='comment'>
                                    <p>
                                        {x.comment}
                                    </p>
                                </li>
                            ))}
                    </ul>

                    {/* {Object.values(game.comments).length && ( */}
                    {/* //   <!-- Display paragraph: If there are no games in the database --> */}
                    {/* <p className='no-comment'>No comments.</p>
                    ) } */}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className='buttons'>
                        <Link
                            to={`/catalog/${game._id}/edit`}
                            className='button'
                        >
                            Edit
                        </Link>
                        <button className='button' onClick={onDeleteClick}>
                            Delete
                        </button>
                    </div>
                )}
            </div>

            {isAuthenticated && (
                <AddComment onCommentSubmit={onCommentSubmit} />
            )}
        </section>
    );
};
