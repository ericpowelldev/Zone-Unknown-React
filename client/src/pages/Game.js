import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HexGridS from '../components/HexGridS';
import HexGridM from '../components/HexGridM';
import HexGridL from '../components/HexGridL';

function Game() {
    return (
        <div id="mainDrop">
            <Nav />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <HexGridL />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default Game;