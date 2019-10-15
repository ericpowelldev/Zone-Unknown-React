import React from 'react';
import { Link } from 'react-router-dom';

class MainWelcome extends React.Component {

    constructor(props) {
        super(props);

        this.handleLoadGame = this.handleLoadGame.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleLoadGame = () => {
        this.props.fLoadGame();
    }
    handleNewGame = () => {
        this.props.fNewGame();
    }
    handleSignOut = () => {
        this.props.fSignOut();
    }

    render() {
        return (
            <div id="mainMenuBox">
                <h1 className="hShade" id="mainMenuHeader">Welcome {this.props.username}</h1>
                <p className="mShade" id="mainMenuExplain">ZONE UNKNOWN is an adventure game based on survival. You find yourself stranded in a solar system due to your warp drive breaking down. Explore 3 planets and find parts to rebuild your warp drive. Along the way, you will encounter harsh events that will test your survival skills. You need to manage your HEALTH, OXYGEN and FUEL. You lose 1 OXYGEN per turn and will need 3 FUEL to replenish your O2 at the ship (middle hex). When your HEALTH hits 0, you lose! To advance to the next planet, collect the warp drive piece and return to your ship. Good luck and don't forget to use the chat if you get stuck.</p>
                <Link to="/game" onClick={this.handleLoadGame}><div className="mainMenuBtn" id="loadBtn">
                    <p className="mainMenuBtnText">Load Game</p>
                </div></Link>
                <Link to="/game" onClick={this.handleNewGame}><div className="mainMenuBtn" id="newBtn">
                    <p className="mainMenuBtnText">New Game</p>
                </div></Link>
                <Link to="/" onClick={this.handleSignOut}><div className="mainMenuBtn" id="signOutBtn">
                    <img id="mainMenuImgS" src="/images/vectors/home/signOut.svg" />
                    <p className="mainMenuBtnText">Sign Out</p>
                </div></Link>
            </div>
        )
    }
}

export default MainWelcome;