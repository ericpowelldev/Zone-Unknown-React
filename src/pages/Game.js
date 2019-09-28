import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Game() {
    return (
        <div className="mainDrop">
            <h1>GAME</h1>
            <Link to="/"><h2>Click here to go to the HOME page.</h2></Link>
        </div>
    )
}

export default Game;