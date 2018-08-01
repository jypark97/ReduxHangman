/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

// import * as types from '../actions/types';

const badGuessesReducer = (state = 0, action) => {
    let newState = state;
    switch (action.type) {
        case 'UPDATE_WORD':
            return 0;
        case 'BAD_GUESS':
            return ++newState;
        default:
            return state;
    }
};

export default badGuessesReducer;
