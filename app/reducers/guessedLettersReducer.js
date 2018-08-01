const guessedLetterReducer = (state = [], action) => {
    let newState = state.slice();
    switch(action.type) {
        case 'UPDATE_WORD':
            newState = [];
            return newState;
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default guessedLetterReducer;
