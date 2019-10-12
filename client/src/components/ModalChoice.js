import React from 'react';
import event from '../utils/event';
import logic from '../utils/logic';
import sav from '../utils/sav';

class ModalChoice extends React.Component {

    handleClick(index) {

        if (event.stat !== `Ship`) {
            let eO = {}
            eO.key = event.key;

            ////////// ITEM EVENT //////////
            if (event.stat === `Health` && sav.itemCount >= 4) {
                let posChance = 0.75
                let outcomeChance = logic.rdmFloat(0, 1)
                if (outcomeChance <= posChance) eO.obj = event.obj.choices[index].outcomes[0];
                else eO.obj = event.obj.choices[index].outcomes[1];
            }
            else if (event.stat === `Oxygen` && sav.itemCount >= 5) {
                let posChance = 0.75
                let outcomeChance = logic.rdmFloat(0, 1)
                if (outcomeChance <= posChance) eO.obj = event.obj.choices[index].outcomes[0];
                else eO.obj = event.obj.choices[index].outcomes[1];
            }
            else {
                eO.obj = event.obj.choices[index].outcomes[logic.rdmInt(0, event.obj.choices[index].outcomes.length - 1)];
            }
            ////////// ITEM EVENT //////////
            
            eO.dynamic = false;
            eO.stat = event.stat;
            eO.icon = event.icon;
            event = eO;

            this.props.showModalEvent();
        }
        else {
            if (index === 0) {
                if (sav.fuel >= 2) {

                    ////////// ITEM EVENT //////////
                    if (sav.itemCount >= 6) sav.oxygen += 15;
                    else sav.oxygen += 10;
                    ////////// ITEM EVENT //////////

                    sav.fuel -= 2;
                    this.props.hideModals();
                }
                else {
                    event = {
                        status: `NoFuel`,
                        text: `You need at least 2 fuel to replenish your oxygen!`
                    };
                    this.props.showModalEvent();
                }
            }
            else if (index === 1) {
                if (sav.warpCount > sav.planet) {
                    if (sav.warpCount < 3) {
                        if (sav.health < 5) sav.health = 5;
                        if (sav.oxygen < 10) sav.oxygen = 10;
                        sav.planet++;
                        this.props.hideModals();
                    }
                    else if (sav.warpCount === 3) {
                        event = {
                            status: `NoUranium`,
                            text: `You still need to find uranium before you go home!`
                        };
                        this.props.showModalEvent();
                    }
                    else {
                        event = {
                            status: `Win`,
                            text: `You have survived! Have a safe journey home!`
                        };
                        this.props.showModalEvent();
                    }
                }
                else {
                    event = {
                        status: `NoAdvance`,
                        text: `You need to find a warp piece before leaving the planet!`
                    };
                    this.props.showModalEvent();
                }
            }
            else if (index === 2) {
                this.props.hideModals();
            }
        }
    }

    render() {
        return (
            <div id="modalChoice">
                <p id="modalText">{event.obj.text}</p>
                {event.obj.choices.map((item, index) => (
                    <div className="modalBtn" onClick={() => this.handleClick(index)}>
                        <p className="modalBtnText">{item.text}</p>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default ModalChoice;