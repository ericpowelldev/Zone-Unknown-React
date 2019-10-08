import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HexGrid from '../components/HexGrid';
import logic from '../utils/logic';

class Game extends React.Component {

    render() {
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
                {/* <img className="resize" src="/images/vectors/hp.svg"></img>
            <img className="resize" src="/images/vectors/o2.svg"></img>
            <img className="resize" src="/images/vectors/fu.svg"></img>
            <img className="resize" src="/images/vectors/bio.svg"></img>
            <img className="resize" src="/images/vectors/chat.svg"></img>
            <img className="resize" src="/images/vectors/close.svg"></img>
            <img className="resize" src="/images/vectors/cog.svg"></img>
            <img className="resize" src="/images/vectors/globe.svg"></img>
            <img className="resize" src="/images/vectors/meteor.svg"></img>
            <img className="resize" src="/images/vectors/player.svg"></img>
            <img className="resize" src="/images/vectors/radar.svg"></img>
            <img className="resize" src="/images/vectors/send.svg"></img>
            <img className="resize" src="/images/vectors/ship.svg"></img>
            <img className="resize" src="/images/vectors/signIn.svg"></img>
            <img className="resize" src="/images/vectors/signOut.svg"></img>
            <img className="resize" src="/images/vectors/soundOff.svg"></img>
            <img className="resize" src="/images/vectors/soundOn.svg"></img>
            <img className="resize" src="/images/vectors/tab.svg"></img>
            <img className="resize" src="/images/vectors/uranium.svg"></img>
            <img className="resize" src="/images/vectors/user.svg"></img>
            <img className="resize" src="/images/vectors/warning.svg"></img>
            <img className="resize" src="/images/vectors/warp.svg"></img> */}
                <HexGrid />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </div>
        )
    }
}

export default Game;