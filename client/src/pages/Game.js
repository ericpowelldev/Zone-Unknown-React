import React from 'react';
import Sky from '../components/Sky';
import ModalEvent from '../components/ModalEvent';
import ModalMenu from '../components/ModalMenu';
import ModalChat from '../components/ModalChat';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import ResourceBar from '../components/ResourceBar';
import HexGrid from '../components/HexGrid';
import logic from '../utils/logic';
import sav from '../utils/sav';
import glob from '../utils/glob';

class Game extends React.Component {

    constructor() {
        super();
        this.showModalEvent = this.showModalEvent.bind(this);
        this.showModalMenu = this.showModalMenu.bind(this);
        this.showModalChat = this.showModalChat.bind(this);
        this.hideModals = this.hideModals.bind(this);
    }

    state = {
        showModalEvent: false,
        showModalMenu: false,
        showModalChat: false,
        key: 0
    }

    componentDidMount() {
        this.generateReach();
    }

    showModalEvent() {
        this.setState({ showModalEvent: true, showModalMenu: false, showModalChat: false });
        this.generateReach();
    }
    showModalMenu() {
        this.setState({ showModalEvent: false, showModalMenu: true, showModalChat: false });
        this.generateReach();
    }
    showModalChat() {
        this.setState({ showModalEvent: false, showModalMenu: false, showModalChat: true });
        this.generateReach();
    }
    hideModals() {
        this.setState({ showModalEvent: false, showModalMenu: false, showModalChat: false });
        this.statCheck();
        this.generateReach();
    }

    statCheck() {

        // Check if the player is dead
        if (sav.health <= 0) {
            sav.event = {
                alert: `Lose`,
                text: `You have died! You will now be returned to the home page.`
            };
            this.showModalEvent();
        }
        else {
            // Cap out the resources if you have too much
            if (sav.health >= glob.HPmax) sav.health = glob.HPmax;

            ////////// ITEM EVENT //////////
            if (sav.itemCount >= 6) {
                if (sav.oxygen >= glob.O2maxI) sav.oxygen = glob.O2maxI;
            }
            else {
                if (sav.oxygen >= glob.O2max) sav.oxygen = glob.O2max;
            }
            ////////// ITEM EVENT //////////

            if (sav.fuel >= glob.FUELmax) sav.fuel = glob.FUELmax;

            // Save the game to the user database
            // API.saveGame();
        }
    }

    generateReach() {

        // Get current planet
        let myP = sav.planets[sav.planet].hexes;

        // Coordinates of current hex
        let myXY = sav.coords;
        let myX = myXY[0];
        let myY = myXY[1];

        // Loop through every hex & assign values
        for (let i = 0; i < myP.length; i++) {

            // Coordinates of current hex
            let thisXY = myP[i].hexXY;
            let thisX = myP[i].hexXY[0];
            let thisY = myP[i].hexXY[1];

            // If the current hex in the loop is equal to the current hex's coordinates
            if (`${thisX}${thisY}` === `${myX}${myY}`) {
                myP[i].visited = "true";
                myP[i].current = "true";
            }
            else {
                myP[i].current = "false";
            }

            // If the current hex in the loop is within reach
            if (Math.abs(thisX - myX) <= 1 && Math.abs(thisY - myY) <= 1 && thisX + thisY !== myX + myY) {
                myP[i].reach = "true";
            }
            else {
                myP[i].reach = "false";
            }

            // Set css class based on booleans
            if (myP[i].current === "true") {
                myP[i].class = "hex hex-current";
            }
            else if (myP[i].hexXY[0] === 0 && myP[i].hexXY[1] === 0 && myP[i].reach === "true") {
                myP[i].class = "hex hex-ship-reach";
            }
            else if (myP[i].hexXY[0] === 0 && myP[i].hexXY[1] === 0 && myP[i].reach === "false") {
                myP[i].class = "hex hex-ship-noReach";
            }
            else if (myP[i].visited === "true" && myP[i].reach === "true") {
                myP[i].class = "hex hex-visited-reach";
            }
            else if (myP[i].visited === "true" && myP[i].reach === "false") {
                myP[i].class = "hex hex-visited-noReach";
            }
            else if (myP[i].visited === "false" && myP[i].reach === "true") {
                myP[i].class = "hex hex-notVisited-reach";
            }
            else {
                myP[i].class = "hex hex-notVisited-noReach";
            }
        }

        // TESTING //
        // console.log(`PLANET ${sav.planet + 1}:`);
        // console.log(sav.planets[sav.planet].hexes);
        // console.log(`\n`);
        // console.log(`------------------------------`);
        // console.log(`\n`);
        // TESTING //

        this.setState({ key: logic.rdmFloat(0, 1) });
    }

    render() {
        return (
            <React.Fragment>
                <Sky page="game" />
                <div id="mainDrop">
                    {this.state.showModalEvent ?
                        <ModalEvent showModalEvent={this.showModalEvent} hideModals={this.hideModals} /> :
                        <React.Fragment />}
                    {this.state.showModalMenu ?
                        <ModalMenu showModalMenu={this.showModalMenu} hideModals={this.hideModals} /> :
                        <React.Fragment />}
                    {this.state.showModalChat ?
                        <ModalChat showModalChat={this.showModalChat} hideModals={this.hideModals} /> :
                        <React.Fragment />}
                    <Nav page="game" />
                    <MenuBar showModalMenu={this.showModalMenu} showModalChat={this.showModalChat} />
                    <ResourceBar />
                    <HexGrid showModalEvent={this.showModalEvent} hideModals={this.hideModals} />
                    <Footer page="game" />
                </div>
            </React.Fragment>
        )
    }
}

export default Game;