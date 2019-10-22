import React from 'react';
import { Howl, Howler } from 'howler';
import events from '../utils/events';
import logic from '../utils/logic';
import g from '../utils/globals';

class Hex extends React.Component {

    constructor(props) {
        super(props)
    }

    sfx = () => {

        // Play tick sound
        let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.15 });
        sfx.play();
    }

    // Called when any hex is clicked
    handleClick = () => {

        // Play select sound
        let sfx = new Howl({ src: [`/sounds/sfx_select.wav`], volume: 0.25 });
        sfx.play();

        // If the player can reach this hex
        if (this.props.reach === "true") {

            // Get current planet
            let myP = g.sav.planets[g.sav.planet].hexes;

            // Get coordinates from hex that was clicked
            let newXY = this.props.coords.split(`, `);
            let newX = parseInt(newXY[0]);
            let newY = parseInt(newXY[1]);
            g.sav.coords = [newX, newY];

            // Lose oxygen + health if oxygen is below zero
            g.sav.oxygen -= g.glob.O2loss;
            if (g.sav.oxygen < 0) {
                g.sav.health += g.sav.oxygen;
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
        else if (this.props.coords === g.sav.coords.join(`, `)) {
            g.event = {
                alert: `SameCoords`,
                text: `You are already on this hex!`
            };
            this.props.showModalEvent();
        }
        else {
            g.event = {
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
            e.change = g.glob.FUELgain;
            e.stat = `Fuel`;
            e.icon = `/images/vectors/game/fu.svg`;
        }
        else if (eK === `warp`) {
            e.text = events.warp[g.sav.warpCount].text;
            e.change = g.sav.warpCount + 1;
            e.stat = `Warp Pieces Collected`;
            e.icon = `/images/vectors/warp/${g.sav.warpCount}.svg`;
        }
        else if (eK === `item`) {
            e.text = events.item[g.sav.itemCount].text;
            e.change = g.sav.itemCount + 1;
            e.stat = `Items Collected`;
            e.icon = `/images/vectors/item/${g.sav.itemCount}.svg`;
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
        g.event = e;

        // TESTING //
        // console.log(`ASSIGNED EVENT:`);
        // console.log(g.event);
        // console.log(`\n`);
        // console.log(`------------------------------`);
        // console.log(`\n`);
        // TESTING //

        // Show the modal after our event is chosen
        this.props.showModalEvent();
    }

    // Called whenever state changes & when a parent component is rendered
    render() {
        return (
            <div
                className={this.props.class}
                data-index={this.props.index}
                data-coords={this.props.coords}
                data-visited={this.props.visited}
                data-reach={this.props.reach}
                data-current={this.props.current}
                onClick={this.handleClick}
                onMouseEnter={this.sfx}>
                {this.props.coords === `0, 0` ?
                    <img id="hexShip" src="/images/vectors/game/ship.svg" /> :
                    (this.props.coords === `${g.sav.coords[0]}, ${g.sav.coords[1]}` ?
                        <img id="hexPlayer" src="/images/vectors/game/player.svg" /> :
                        <React.Fragment />)}
            </div>
        )
    }
}

export default Hex;