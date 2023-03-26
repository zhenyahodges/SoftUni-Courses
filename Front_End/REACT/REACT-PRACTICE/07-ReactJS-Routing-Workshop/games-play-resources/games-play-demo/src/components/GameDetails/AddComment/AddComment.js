import { useForm } from '../../../hooks/useForm';

export const AddComment = ({ onCommentSubmit }) => {
    const { values, changeHandler, onSubmit } = useForm(
        {
            comment: '',
        },
        onCommentSubmit
    );

    return (
        // {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className='create-comment'>
            <label>Add new comment:</label>
            <form className='form' onSubmit={onSubmit}>
                {/*>>added  */}
                {/* <input
                        type='text'
                        name='username'
                        placeholder='Pesho'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /> */}
                {/*  */}
                <textarea
                    name='comment'
                    placeholder='Comment......'
                    value={values.comment}
                    onChange={changeHandler}
                ></textarea>
                <input
                    className='btn submit'
                    type='submit'
                    value='Add Comment'
                />
            </form>
        </article>
    );
};
