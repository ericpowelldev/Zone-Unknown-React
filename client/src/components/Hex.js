import React from 'react';
import glob from '../utils/glob';
import events from '../utils/events';
import logic from '../utils/logic';
import sav from '../utils/sav';

class Hex extends React.Component {

    constructor(props) {
        super(props)
    }

    // Called when any hex is clicked
    handleClick = () => {

        // If the player can reach this hex
        if (this.props.reach === "true") {

            // Get current planet
            let myP = sav.planets[sav.planet].hexes;

            // Get coordinates from hex that was clicked
            let newXY = this.props.coords.split(`, `);
            let newX = parseInt(newXY[0]);
            let newY = parseInt(newXY[1]);
            sav.coords = [newX, newY];

            // Lose oxygen + health if oxygen is below zero
            sav.oxygen -= glob.O2loss;
            if (sav.oxygen < 0) {
                sav.health += sav.oxygen;
            }
            ////////// RENDER THIS RIGHT HERE SOMEHOW //////////

            // Function to run after stats have been calculated
            if (myP[this.props.index].visited === "false" || myP[this.props.index].event === "ship") {
                this.getEvent(myP[this.props.index].event);
            }
            else {
                // Hides modals (if any) and forces the page to re-render the stats
                this.props.hideModals();
            }
        }
        else if (this.props.coords === sav.coords.join(`, `)) {
            sav.event = {
                alert: `SameCoords`,
                text: `You are already on this hex!`
            };
            this.props.showModalEvent();
        }
        else {
            sav.event = {
                alert: `NoReach`,
                text: `You cannot reach this hex!`
            };
            this.props.showModalEvent();
        }
    }

    // Get a random event to pop up in a modal (This takes in the event key for the current hex)
    getEvent = (eK) => {

        // Local event object
        let e = {};
        e.key = eK;

        // Hydra to generate the event
        if (eK === `psHP`) {
            let rdm = logic.rdmInt(0, events.psHP.length - 1);
            e.text = events.psHP[rdm].text;
            e.change = events.psHP[rdm].change;
            e.stat = `Health`;
            e.icon = `/images/vectors/game/hp.svg`;
        }
        else if (eK === `nsHP`) {
            let rdm = logic.rdmInt(0, events.nsHP.length - 1);
            e.text = events.nsHP[rdm].text;
            e.change = events.nsHP[rdm].change;
            e.stat = `Health`;
            e.icon = `/images/vectors/game/hp.svg`;
        }
        else if (eK === `dHP`) {
            let rdm = logic.rdmInt(0, events.dHP.length - 1);
            e.obj = events.dHP[rdm];
            e.stat = `Health`;
            e.icon = `/images/vectors/game/hp.svg`;
        }
        else if (eK === `psO2`) {
            let rdm = logic.rdmInt(0, events.psO2.length - 1);
            e.text = events.psO2[rdm].text;
            e.change = events.psO2[rdm].change;
            e.stat = `Oxygen`;
            e.icon = `/images/vectors/game/o2.svg`;
        }
        else if (eK === `nsO2`) {
            let rdm = logic.rdmInt(0, events.nsO2.length - 1);
            e.text = events.nsO2[rdm].text;
            e.change = events.nsO2[rdm].change;
            e.stat = `Oxygen`;
            e.icon = `/images/vectors/game/o2.svg`;
        }
        else if (eK === `dO2`) {
            let rdm = logic.rdmInt(0, events.dO2.length - 1);
            e.obj = events.dO2[rdm];
            e.stat = `Oxygen`;
            e.icon = `/images/vectors/game/o2.svg`;
        }
        else if (eK === `fuel`) {
            let rdm = logic.rdmInt(0, events.fuel.length - 1);
            e.text = events.fuel[rdm].text;
            e.change = glob.FUELgain;
            e.stat = `Fuel`;
            e.icon = `/images/vectors/game/fu.svg`;
        }
        else if (eK === `warp`) {
            e.text = events.warp[sav.warpCount].text;
            e.change = sav.warpCount + 1;
            e.stat = `Warp Pieces Collected`;
            e.icon = `/images/vectors/warp/${sav.warpCount}.svg`;
        }
        else if (eK === `item`) {
            e.text = events.item[sav.itemCount].text;
            e.change = sav.itemCount + 1;
            e.stat = `Items Collected`;
            e.icon = `/images/vectors/item/${sav.itemCount}.svg`;
        }
        else if (eK === `ship`) {
            e.obj = events.ship;
            e.stat = `Ship`;
            e.icon = `/images/vectors/game/ship.svg`;
        }
        else {
            console.log(`Begone demon!`);
        }

        // Assign local event object to new global event object
        sav.event = e;

        // TESTING //
        console.log(`ASSIGNED EVENT:`);
        console.log(sav.event);
        console.log(`\n`);
        console.log(`------------------------------`);
        console.log(`\n`);
        // TESTING //

        // Show the modal after our event is chosen
        this.props.showModalEvent();
    }

    // Called whenever state changes & when a parent component is rendered
    render() {
        return (
            <React.Fragment>
                <div
                    className={this.props.class}
                    data-index={this.props.index}
                    data-coords={this.props.coords}
                    data-visited={this.props.visited}
                    data-reach={this.props.reach}
                    data-current={this.props.current}
                    onClick={this.handleClick}>
                </div>
                {/* {this.props.coords === `0, 0` ?
                    <img src="/images/vectors/game/ship.svg" /> :
                    <React.Fragment />} */}
            </React.Fragment>
        )
    }
}

export default Hex;