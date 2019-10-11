import React from 'react';
import sav from '../utils/sav.js';
import event from '../utils/event.js';
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

            props.action();
        }
        else {
            alert("You cannot reach this hex!");
        }
    }

    // Get a random event to pop up in a modal (This takes in the event key for the current hex)
    getEvent = (eK) => {

        // Declare shorthand for props
        let props = this.props;

        // Local event object
        let eO = {
            key: eK,
            obj: {},
            dynamic: false,
            stat: ``,
            icon: ``
        }

        // Hydra to generate the event
        if (eK === `psHP` || eK === `nsHP`) {
            eO.obj = EVT[eK][logic.rdmInt(0, EVT[eK].length - 1)];
            eO.stat = `Health`;
            eO.icon = `/images/vectors/hp.svg`;
        }
        else if (eK === `psO2` || eK === `nsO2`) {
            eO.obj = EVT[eK][logic.rdmInt(0, EVT[eK].length - 1)];
            eO.stat = `Oxygen`;
            eO.icon = `/images/vectors/o2.svg`;
        }
        else if (eK === `dHP`) {
            eO.obj = EVT[eK][logic.rdmInt(0, EVT[eK].length - 1)];
            eO.stat = `Health`;
            eO.icon = `/images/vectors/hp.svg`;
            eO.dynamic = true;
        }
        else if (eK === `dO2`) {
            eO.obj = EVT[eK][logic.rdmInt(0, EVT[eK].length - 1)];
            eO.stat = `Oxygen`;
            eO.icon = `/images/vectors/o2.svg`;
            eO.dynamic = true;
        }
        else if (eK === `fuel`) {
            eO.obj = EVT[eK][logic.rdmInt(0, EVT[eK].length - 1)];
            eO.obj.change = 1;
            eO.stat = `Fuel`;
            eO.icon = `/images/vectors/fu.svg`;
        }
        else if (eK === `warp`) {
            eO.obj = EVT.warp[sav.warpCount];
            eO.obj.change = sav.warpCount + 1;
            eO.stat = `Warp Pieces Collected`;
            eO.icon = `/images/vectors/warps/.svg`;
        }
        else if (eK === `item`) {
            eO.obj = EVT.item[sav.itemCount];
            eO.obj.change = sav.itemCount + 1;
            eO.stat = `Items Collected`;
            eO.icon = `/images/vectors/items/.svg`;
        }
        else if (eK === `ship`) {
            eO.obj = EVT.ship;
            eO.dynamic = true;
        }
        else {
            console.log(`Begone demon!`);
        }

        // Assigning the local event object to the global event object
        event = eO;

        // Show the modal after our event is chosen
        props.showModalEvent();
    }

    // Called whenever state changes & when a parent component is rendered
    render() {
        return (
            <div className={this.props.class} data-index={this.props.index} data-coords={this.props.coords} data-visited={this.props.visited} data-reach={this.props.reach} data-current={this.props.current} onClick={this.handleClick}></div>
        )
    }
}

export default Hex;