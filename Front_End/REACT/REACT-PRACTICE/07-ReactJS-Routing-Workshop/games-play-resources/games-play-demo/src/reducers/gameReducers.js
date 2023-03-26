export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_FETCH':
            // return action.game;
            // return Object.values({},action.payload);
            // return {...action.payload}  =====>chisto nova referencia da se vkara !
            return {...action.payload};

            case 'COMMENT_ADD':
            return { ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.email,
                        },
                    },
                ],};
                // edit coment
                // delete comm
           
        default:
            return state;
    }
};