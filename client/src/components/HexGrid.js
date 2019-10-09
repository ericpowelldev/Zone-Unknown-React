import React from 'react';
import Hex from './Hex';
import sav from '../utils/sav'
import logic from '../utils/logic';

class HexGrid extends React.Component {

    constructor(props) {
        super(props);
        this.generateReach = this.generateReach.bind(this);
    }

    state = {
        key: 0
    }

    componentDidMount() {
        this.generatePlanets();
    }

    render() {
        let myP = sav.planets[sav.planet].hexes;

        return (
            <div id="grid" >
                <div id="gridFix">
                    <div className="g4">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -4 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g3">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -3 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g2">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -2 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g1">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -1 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g0">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 0 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g1">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 1 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g2">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 2 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g3">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 3 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g4">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 4 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} action={this.generateReach} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    //////////////////////////////   PLANET GENERATION   //////////////////////////////

    generatePlanets() {

        // Looping through each planet to generate
        for (let inc = 0; inc < 3; inc++) {

            // Declaring variables we need to generate a planet
            let psHPCount, nsHPCount, psO2Count, nsO2Count;
            let fuelCount, warpCount, itemCount;
            let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
            let numArray = [];

            // Setting default random & set event counts for each specific planet
            if (inc === 0) {
                psHPCount = 5;
                nsHPCount = 4;
                psO2Count = 5;
                nsO2Count = 4;
                fuelCount = 3;
                warpCount = 1;
                itemCount = 1;
            }
            else if (inc === 1) {
                psHPCount = 9;
                nsHPCount = 9;
                psO2Count = 9;
                nsO2Count = 9;
                fuelCount = 6;
                warpCount = 1;
                itemCount = 1;
            }
            else if (inc === 2) {
                psHPCount = 15;
                nsHPCount = 15;
                psO2Count = 15;
                nsO2Count = 15;
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
            for (let e = 0; e < (fuelCount + warpCount + itemCount); e++) {
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
                if (fuelCount > 0) {
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

        // Start function to generate hex values
        this.generateReach();
    }

    //////////////////////////////   GAME   //////////////////////////////

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

        // Save the planets to the user's account
        console.log(sav.planets);

        this.setState({ key: logic.rdmFloat(0, 1) });
    }
}

export default HexGrid;