/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {letter: 'h', guessed: false},
    {letter: 'o', guessed: false},
    {letter: 'r', guessed: false},
    {letter: 'i', guessed: false},
    {letter: 'z', guessed: false},
    {letter: 'o', guessed: false},
    {letter: 'n', guessed: false},
    {letter: 's', guessed: false}
], action) => {
    let newState = state.slice();
    switch (action.type) {
        case 'UPDATE_WORD':
            newState = [];
            const word = action.word.split('');
            word.map(letter => {
                newState.push({
                    letter,
                    guessed: false
                });
            });
            return newState;
        case 'GOOD_GUESS':
            const indices = [];
            newState.filter((letter, index) => {
                if(letter.letter === action.letter) {
                    indices.push(index);
                }
            });
            indices.forEach(index => {
                newState[index].guessed = true;
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
