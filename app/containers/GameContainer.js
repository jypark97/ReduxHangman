import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const inlineStyle = {
    'border': 'solid 1px',
    'width': '50px',
    'height': '50px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'margin': '10px'
};

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessed, updateWord}) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    let newWord;
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <input type="text"
                ref={node => {newWord = node;}}
            />
            <button onClick={() => updateWord(newWord.value) }>New Word</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value) }
            />
            {guessed.map((letter, index) => <div key={index} style={inlineStyle}>{letter}</div>)}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessed: PropTypes.array,
    updateWord: PropTypes.func
};

const mapStateToProps = ( state ) => {
    return {
        guessed: state.guessed,
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch({
                type: 'BAD_GUESS',
                letter: inputLetter,
            });
        },
        onGoodGuess: (inputLetter) => {
            dispatch({
                type: 'GOOD_GUESS',
                letter: inputLetter,
            });
        },
        updateWord: (inputWord) => {
            dispatch({
                type: 'UPDATE_WORD',
                word: inputWord
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
