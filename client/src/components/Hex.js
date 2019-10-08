import React from 'react';
import sav from '../utils/sav.js';
import EVT from '../utils/EVT.js';
import logic from '../utils/logic.js';

class Hex extends React.Component {

    // Constructor
    constructor(props) {
        super(props);
    }

    // State object
    state = {
        hexClass: "hex ",
        visited: "false",
        reach: "false",
        current: "false",
    }

    // Called when any hex is clicked
    getHex = () => {

        // Declare shorthand for props
        let props = this.props;
        console.log(props);
        console.log(props.reach);

        // If the player can reach this hex
        if (props.reach === "true") {

            // Get current planet
            let myP = sav.planets[sav.planet].hexes;

            // Get coordinates from hex that was clicked
            let newXY = props.coords.split(`, `);
            let newX = parseInt(newXY[0]);
            let newY = parseInt(newXY[1]);
            sav.coords = newXY;

            // 
            this.generateState();

            // Lose oxygen + health if oxygen is below zero
            sav.oxygen -= 1;
            if (sav.oxygen < 0) {
                sav.health += sav.oxygen;
            }
            ////////// RENDER THIS RIGHT HERE SOMEHOW //////////
        }
        else {
            alert("You cannot reach this hex!");
        }
    }

    // Callback for generateHexValues (from getHex)
    generateState = () => {

        // Declare shorthand for props
        let props = this.props;
        console.log(props);

        // Find the current hex and generate the state
        sav.planets[sav.planet].hexes.map(hex => {
            if (sav.coords === hex.hexXY) {

                // Set state
                this.setState({ hexClass: hex.class, visited: hex.visited, reach: hex.reach, current: hex.current });
            }
        });

        // Function to run after stats have been calculated
        if (sav.planets[sav.planet].hexes[props.index].visited === "false") {
            // Get a random event to pop up in a modal (This takes in the state object for the current hex)
            // getEvent(ss, currentP[i].event);
        }
        else {
            // Check stats - Callback to save the game if player is still alive - Callback promise after save to setState (re-renders each hex)
            // checkStats(ss);
        }
    }

    // Called whenever state changes & when a parent component is rendered
    render() {
        return (
            <div className={this.state.hexClass} data-index={this.props.index} data-coords={this.props.coords} data-visited={this.state.visited} data-reach={this.state.reach} data-current={this.state.current} onClick={this.getHex}></div>
        )
    }
}

export default Hex;