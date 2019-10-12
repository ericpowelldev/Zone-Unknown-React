import React from 'react';
import { Link } from 'react-router-dom';
import logic from '../utils/logic'
import sav from '../utils/sav'

class Home extends React.Component {
    
    componentDidMount() {
        this.generatePlanets();
    }

    generatePlanets() {

        // Looping through each planet to generate
        for (let inc = 0; inc < 3; inc++) {

            // Declaring variables we need to generate a planet
            let psHPCount, nsHPCount, psO2Count, nsO2Count;
            let dHPCount, dO2Count, fuelCount, warpCount, itemCount;
            let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
            let numArray = [];

            // Setting default random & set event counts for each specific planet
            if (inc === 0) {
                psHPCount = 5;
                nsHPCount = 4;
                psO2Count = 5;
                nsO2Count = 4;
                dHPCount = 2;
                dO2Count = 2;
                fuelCount = 3;
                warpCount = 1;
                itemCount = 1;
            }
            else if (inc === 1) {
                psHPCount = 9;
                nsHPCount = 9;
                psO2Count = 9;
                nsO2Count = 9;
                dHPCount = 3;
                dO2Count = 3;
                fuelCount = 6;
                warpCount = 1;
                itemCount = 1;
            }
            else if (inc === 2) {
                psHPCount = 15;
                nsHPCount = 15;
                psO2Count = 15;
                nsO2Count = 15;
                dHPCount = 4;
                dO2Count = 4;
                fuelCount = 10;
                warpCount = 2;
                itemCount = 1;
            }
            else {
                console.log(`WTF! How did you get here?`);
            }

            // Loop to generate random events for each hex
            for (let i = 0; i < sav.planets[inc].hexes.length; i++) {
                if (i !== (sav.planets[inc].hexes.length - 1) / 2) {
                    let rdmEvent = eventArray[Math.floor(Math.random() * eventArray.length)];

                    if (rdmEvent === `psHP` && psHPCount > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                        psHPCount--;
                    }
                    else if (rdmEvent === `nsHP` && nsHPCount > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                        nsHPCount--;
                    }
                    else if (rdmEvent === `psO2` && psO2Count > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                        psO2Count--;
                    }
                    else if (rdmEvent === `nsO2` && nsO2Count > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                        nsO2Count--;
                    }
                    else {
                        i--;
                    }
                }
                else {
                    sav.planets[inc].hexes[i].event = `ship`;
                    console.log(`SET EVENT ADDED "ship" to HEX${i}`);
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

            // Loop to assign set events using the random number array
            for (let f = 0; f < numArray.length; f++) {
                if (dHPCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `dHP`;
                    console.log(`SET EVENT ADDED "dHP" to HEX${numArray[f]}`);
                    dHPCount--;
                }
                else if (dO2Count > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `dO2`;
                    console.log(`SET EVENT ADDED "dO2" to HEX${numArray[f]}`);
                    dO2Count--;
                }
                else if (fuelCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `fuel`;
                    console.log(`SET EVENT ADDED "fuel" to HEX${numArray[f]}`);
                    fuelCount--;
                }
                else if (warpCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `warp`;
                    console.log(`SET EVENT ADDED "warp" to HEX${numArray[f]}`);
                    warpCount--;
                }
                else if (itemCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `item`;
                    console.log(`SET EVENT ADDED "item" to HEX${numArray[f]}`);
                    itemCount--;
                }
            }
        }
    }
    
    render() {
        return (
            <div id="mainDrop">
                <h1>HOME</h1>
                <Link to="/game"><h2>Click here to go to the GAME page.</h2></Link>
            </div>
        )
    }
}

export default Home;