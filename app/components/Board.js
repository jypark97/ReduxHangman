import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import { connect } from 'react-redux';

const Board = ({ wordLetters }) => {
    return (
      <div style={{'display': 'flex'}}>
        {/* PSA: Box in this map should normally be given a key */}
        {wordLetters.map((letter, index) => <Box key={index} letter={letter}/>)}
      </div>
  );
};

Board.propTypes = {
    wordLetters: PropTypes.array
};

const mapStateToProps = ( state ) => {
    return {
        wordLetters: state.wordLetters
    };
};

export default  connect(
    mapStateToProps
)(Board);
