import React from 'react';
import sav from '../utils/sav.js';
import EVT from '../utils/EVT.js';
import logic from '../utils/logic.js';

class Hex extends React.Component {

    // Called when any hex is clicked
    handleClick = () => {

        // Declare shorthand for props
        let props = this.props;

        // If the player can reach this hex
        if (props.reach === "true") {

            // Get current planet
            let myP = sav.planets[sav.planet].hexes;

            // Get coordinates from hex that was clicked
            let newXY = props.coords.split(`, `);
            let newX = parseInt(newXY[0]);
            let newY = parseInt(newXY[1]);
            sav.coords = [newX, newY];

            // Lose oxygen + health if oxygen is below zero
            sav.oxygen -= 1;
            if (sav.oxygen < 0) {
                sav.health += sav.oxygen;
            }
            ////////// RENDER THIS RIGHT HERE SOMEHOW //////////

            // Function to run after stats have been calculated
            if (myP[props.index].visited === "false") {
                this.getEvent(myP[props.index].event);
            }
            else {
                // Check stats - Callback to save the game if player is still alive - Callback promise after save to setState (re-renders each hex)
                // checkStats(ss);
            }

            this.props.action();
        }
        else {
            alert("You cannot reach this hex!");
        }
    }

    // Get a random event to pop up in a modal (This takes in the event key for the current hex)
    getEvent = (eK) => {
        console.log(eK);
    }

    // Called whenever state changes & when a parent component is rendered
    render() {
        return (
            <div className={this.props.class} data-index={this.props.index} data-coords={this.props.coords} data-visited={this.props.visited} data-reach={this.props.reach} data-current={this.props.current} onClick={this.handleClick}></div>
        )
    }
}

export default Hex;