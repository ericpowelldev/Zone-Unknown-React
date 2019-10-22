import React from 'react';
import { Howl } from 'howler';
import g from '../utils/globals';

class MainWelcome extends React.Component {

    constructor(props) {
        super(props);

        this.handleLoadGame = this.handleLoadGame.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    sfx = () => {

        // Play tick sound
        let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.25 });
        sfx.play();
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
                <p className="mShade" id="mainMenuExplain">ZONE UNKNOWN is an adventure game based on survival. You find yourself stranded in a solar system due to your warp drive breaking down. Explore {g.sav.planets.length} planets and find parts to rebuild your warp drive. Along the way, you will encounter harsh events that will test your survival skills. You need to manage your HEALTH, OXYGEN and FUEL. You lose {g.glob.O2loss} OXYGEN per turn and will need {g.glob.FUELrep} FUEL to replenish your O2 at the ship (middle hex). When your HEALTH hits 0, you lose! To advance to the next planet, collect the warp drive piece and return to your ship. Good luck!</p>
                <div className="mainMenuBtn" id="loadBtn" onClick={this.handleLoadGame} onMouseEnter={this.sfx}>
                    <img className="mainMenuImg1" alt="" src="/images/vectors/home/loadGame.svg" />
                    <p className="mainMenuBtnText">Load Game</p>
                </div>
                <div className="mainMenuBtn" id="newBtn" onClick={this.handleNewGame} onMouseEnter={this.sfx}>
                    <img className="mainMenuImg2" alt="" src="/images/vectors/home/newGame.svg" />
                    <p className="mainMenuBtnText">New Game</p>
                </div>
                <div className="mainMenuBtn" id="signOutBtn" onClick={this.handleSignOut} onMouseEnter={this.sfx}>
                    <img className="mainMenuImg3" alt="" src="/images/vectors/home/signOut.svg" />
                    <p className="mainMenuBtnText">Sign Out</p>
                </div>
            </div>
        )
    }
}

export default MainWelcome;