import React from 'react';
import { Link } from 'react-router-dom';
import glob from '../utils/glob'
import API from '../utils/API';
import logic from '../utils/logic'
import sav from '../utils/sav'

class MainWelcome extends React.Component {

    constructor(props) {
        super(props);
    }

    loadGame = () => {
        // API.getUser()
    }

    newGame = () => {
        
        // Reset stats to default
        sav.health = glob.HPstart;
        sav.oxygen = glob.O2start;
        sav.fuel = glob.FUELstart;
        sav.warpCount = glob.WARPstart;
        sav.itemCount = glob.ITEMstart;
        sav.coords = [0, 0];
        sav.planet = glob.PLANETstart;

        // Looping through each planet to generate
        for (let inc = 0; inc < 3; inc++) {

            // Declaring variables we need to generate a planet
            let psHPCount, nsHPCount, psO2Count, nsO2Count;
            let dHPCount, dO2Count, fuelCount, warpCount, itemCount;
            let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
            let numArray = [];

            // Setting default random & set event counts for each specific planet
            if (inc === 0) {
                psHPCount = 6;
                nsHPCount = 3;
                psO2Count = 6;
                nsO2Count = 3;
                dHPCount = 2;
                dO2Count = 2;
                fuelCount = 3;
                warpCount = 1;
                itemCount = 3;
            }
            else if (inc === 1) {
                psHPCount = 10;
                nsHPCount = 8;
                psO2Count = 10;
                nsO2Count = 8;
                dHPCount = 3;
                dO2Count = 3;
                fuelCount = 6;
                warpCount = 1;
                itemCount = 2;
            }
            else if (inc === 2) {
                psHPCount = 16;
                nsHPCount = 14;
                psO2Count = 16;
                nsO2Count = 14;
                dHPCount = 4;
                dO2Count = 4;
                fuelCount = 10;
                warpCount = 2;
                itemCount = 1;
            }
            else {
                console.log(`WTF! How did you get here?`);
            }

            // TESTING //
            // console.log(`\n`);
            // console.log(`PLANET ${inc + 1} ASSIGNED EVENTS:`);
            // console.log(`\n`);
            // TESTING //

            // Loop to edit every hex
            for (let i = 0; i < sav.planets[inc].hexes.length; i++) {

                // Reset hex to default
                sav.planets[inc].hexes[i].visited = `false`;
                sav.planets[inc].hexes[i].reach = `false`;
                sav.planets[inc].hexes[i].current = `false`;
                sav.planets[inc].hexes[i].event = ``;
                sav.planets[inc].hexes[i].class = `hex`;

                // Generate a random event for each hex
                if (i !== (sav.planets[inc].hexes.length - 1) / 2) {
                    let rdmEvent = eventArray[Math.floor(Math.random() * eventArray.length)];

                    if (rdmEvent === `psHP` && psHPCount > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        psHPCount--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else if (rdmEvent === `nsHP` && nsHPCount > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        nsHPCount--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else if (rdmEvent === `psO2` && psO2Count > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        psO2Count--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else if (rdmEvent === `nsO2` && nsO2Count > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        nsO2Count--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else {
                        i--;
                    }
                }
                else {
                    sav.planets[inc].hexes[i].event = `ship`;
                    // console.log(`SET EVENT ADDED "ship" to HEX${i}`);
                }
            }

            // Loop to generate random placements for the set events
            for (let e = 0; e < (dHPCount + dO2Count + fuelCount + warpCount + itemCount); e++) {
                let num = logic.rdmInt(0, sav.planets[inc].hexes.length - 1);

                if (inc === 0) {
                    if (num !== 4 && num !== 5 && num !== 8 && num !== 9 && num !== 10 && num !== 13 && num !== 14 && !numArray.includes(num)) {
                        numArray.push(num);
                    }
                    else {
                        e--;
                    }
                }
                else if (inc === 1) {
                    if (num !== 11 && num !== 12 && num !== 17 && num !== 18 && num !== 19 && num !== 24 && num !== 25 && !numArray.includes(num)) {
                        numArray.push(num);
                    }
                    else {
                        e--;
                    }
                }
                else if (inc === 2) {
                    if (num !== 21 && num !== 22 && num !== 29 && num !== 30 && num !== 31 && num !== 38 && num !== 39 && !numArray.includes(num)) {
                        numArray.push(num);
                    }
                    else {
                        e--;
                    }
                }
                else {
                    console.log(`WTF! How did you get here?`);
                }
            }

            // TESTING //
            // console.log(`\n`);
            // console.log(`PLANET ${inc + 1} OVERRIDE EVENTS:`);
            // console.log(`\n`);
            // TESTING //

            // Loop to assign set events using the random number array
            for (let f = 0; f < numArray.length; f++) {
                if (dHPCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `dHP`;
                    dHPCount--;
                    // console.log(`RANDOM EVENT ADDED "dHP" to HEX${numArray[f]}`);
                }
                else if (dO2Count > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `dO2`;
                    dO2Count--;
                    // console.log(`RANDOM EVENT ADDED "dO2" to HEX${numArray[f]}`);
                }
                else if (fuelCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `fuel`;
                    fuelCount--;
                    // console.log(`SET EVENT ADDED "fuel" to HEX${numArray[f]}`);
                }
                else if (warpCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `warp`;
                    warpCount--;
                    // console.log(`SET EVENT ADDED "warp" to HEX${numArray[f]}`);
                }
                else if (itemCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `item`;
                    itemCount--;
                    // console.log(`SET EVENT ADDED "item" to HEX${numArray[f]}`);
                }
            }

            // TESTING //
            // console.log(`\n`);
            // console.log(`------------------------------`);
            // TESTING //
        }

        // TESTING //
        // console.log(`\n`);
        // console.log(`PLANET 1:`);
        // console.log(sav.planets[0].hexes);
        // console.log(`\n`);
        // console.log(`PLANET 2:`);
        // console.log(sav.planets[1].hexes);
        // console.log(`\n`);
        // console.log(`PLANET 3:`);
        // console.log(sav.planets[2].hexes);
        // console.log(`\n`);
        // console.log(`------------------------------`);
        // console.log(`\n`);
        // TESTING //
    }
    signOut = () => {

    }

    render() {
        return (
            <div id="mainMenuBox">
                <h1 className="hShade" id="mainMenuHeader">Welcome {this.props.username}</h1>
                <p className="mShade" id="mainMenuExplain">ZONE UNKNOWN is an adventure game based on survival. You find yourself stranded in a solar system due to your warp drive breaking down. Explore 3 planets and find parts to rebuild your warp drive. Along the way, you will encounter harsh events that will test your survival skills. You need to manage your HEALTH, OXYGEN and FUEL. You lose 1 OXYGEN per turn and will need 3 FUEL to replenish your O2 at the ship (middle hex). When your HEALTH hits 0, you lose! To advance to the next planet, collect the warp drive piece and return to your ship. Good luck and don't forget to use the chat if you get stuck.</p>
                <Link to="/game" onClick={this.loadGame}><div className="mainMenuBtn" id="loadBtn">
                    <p className="mainMenuBtnText">Load Game</p>
                </div></Link>
                <Link to="/game" onClick={this.newGame}><div className="mainMenuBtn" id="newBtn">
                    <p className="mainMenuBtnText">New Game</p>
                </div></Link>
                <Link to="/" onClick={this.props.fSignOut}><div className="mainMenuBtn" id="signOutBtn">
                    <img id="mainMenuImgS" src="/images/vectors/home/signOut.svg" />
                    <p className="mainMenuBtnText">Sign Out</p>
                </div></Link>
            </div>
        )
    }
}

export default MainWelcome;