import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mainDrop">
            <h1>HOME</h1>
            <Link to="/game"><h2>Click here to go to the GAME page.</h2></Link>
        </div>
    )
}

export default Home;