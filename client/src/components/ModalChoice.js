import React from 'react';
import { Howl, Howler } from 'howler';
import logic from '../utils/logic';
import g from '../utils/globals';

class ModalChoice extends React.Component {

    constructor(props) {
        super(props);
    }

    sfx = () => {

        // Play tick sound
        let sound = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.15 });
        sound.play();
    }

    handleClick = (index) => {

        // Play back sound
        let sfx = new Howl({ src: [`/sounds/sfx_back.wav`], volume: 0.25 });
        sfx.play();

        // Checks if on the ship hex
        if (g.event.stat !== `Ship`) {

            // Local event object
            let e = {}
            e.key = g.event.key;
            e.stat = g.event.stat;
            e.icon = g.event.icon;

            ////////// ITEM EVENT //////////
            if (g.event.stat === `Health` && g.sav.itemCount >= 4) {
                let posChance = 0.75
                let outcomeChance = logic.rdmFloat(0, 1)
                if (outcomeChance <= posChance) {
                    e.text = g.event.obj.choices[index].outcomes[0].text;
                    e.change = g.event.obj.choices[index].outcomes[0].change;
                }
                else {
                    e.text = g.event.obj.choices[index].outcomes[1].text;
                    e.change = g.event.obj.choices[index].outcomes[1].change;
                }
            }
            else if (g.event.stat === `Oxygen` && g.sav.itemCount >= 5) {
                let posChance = 0.75
                let outcomeChance = logic.rdmFloat(0, 1)
                if (outcomeChance <= posChance) {
                    e.text = g.event.obj.choices[index].outcomes[0].text;
                    e.change = g.event.obj.choices[index].outcomes[0].change;
                }
                else {
                    e.text = g.event.obj.choices[index].outcomes[1].text;
                    e.change = g.event.obj.choices[index].outcomes[1].change;
                }
            }
            else {
                let rdmOutcome = logic.rdmInt(0, g.event.obj.choices[index].outcomes.length - 1)
                e.text = g.event.obj.choices[index].outcomes[rdmOutcome].text;
                e.change = g.event.obj.choices[index].outcomes[rdmOutcome].change;
            }
            ////////// ITEM EVENT //////////

            // Assign local event object to new global event object
            g.event = e;

            this.props.showModalEvent();
        }
        else {
            if (index === 0) {
                if (g.sav.fuel >= g.glob.FUELrep) {

                    ////////// ITEM EVENT //////////
                    if (g.sav.itemCount >= 6) g.sav.oxygen += g.glob.O2gainI;
                    else g.sav.oxygen += g.glob.O2gain;
                    ////////// ITEM EVENT //////////

                    g.sav.fuel -= g.glob.FUELrep;
                    this.props.hideModals();
                }
                else {
                    g.event = {
                        alert: `NoFuel`,
                        text: `You need at least ${g.glob.FUELrep} fuel to replenish your oxygen!`
                    };
                    this.props.showModalEvent();
                }

                // Save the game to the user database
                this.props.fSaveGame();
            }
            else if (index === 1) {
                if (g.sav.warpCount > g.sav.planet) {
                    if (g.sav.warpCount < 3) {
                        if (g.sav.health < g.glob.HPstart / 2) g.sav.health = Math.round(g.glob.HPstart / 2);
                        if (g.sav.oxygen < g.glob.O2start) g.sav.oxygen = g.glob.O2start;
                        g.sav.planet++;
                        this.props.hideModals();
                    }
                    else if (g.sav.warpCount === 3) {
                        g.event = {
                            alert: `NoUranium`,
                            text: `You still need to find uranium before you go home!`
                        };
                        this.props.showModalEvent();
                    }
                    else {
                        g.event = {
                            alert: `Win`,
                            text: `You have survived! Have a safe journey home! You will now be returned to the home page.`
                        };
                        this.props.showModalEvent();
                    }
                }
                else {
                    g.event = {
                        alert: `NoAdvance`,
                        text: `You need to find a warp piece before leaving the planet!`
                    };
                    this.props.showModalEvent();
                }

                // Save the game to the user database
                this.props.fSaveGame();
            }
            else if (index === 2) {
                this.props.hideModals();

                // Save the game to the user database
                this.props.fSaveGame();
            }
        }
    }

    render() {
        return (
            <div className="mChance" id="modalEventBox">
                <p className="lShade" id="modalEventText">{g.event.obj.text}</p>
                {g.event.obj.choices.map((item, index) => (
                    <div key={index} className="modalBtn" onClick={() => this.handleClick(index)} onMouseEnter={this.sfx}>
                        <p className="modalBtnText">{item.text}</p>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default ModalChoice;