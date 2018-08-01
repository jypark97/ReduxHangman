import React from 'react';
import { Route, Link } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';

const style = {
    backgroundColor: '#F8F8F8',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%',
};

const phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
};

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact={true} path="/" component={GameContainer} />
        <Route exact={true} path="/about" component={About} />
        <div style={phantom} />
          <div style={style}>
            <div>
              <Link to="/">Let's Play!</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
          </div>
    </div>;

export default App;
