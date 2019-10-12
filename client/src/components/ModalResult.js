import React from 'react';
import event from '../utils/event';
import sav from '../utils/sav';

class ModalResult extends React.Component {

    handleClick() {

        if (event.stat === `Health`) {
            ////////// ITEM EVENT //////////
            if (sav.itemCount >= 1) sav.health += event.obj.change + 1;
            else sav.health += event.obj.change;
            ////////// ITEM EVENT //////////
        }
        else if (event.stat === `Oxygen`) {
            ////////// ITEM EVENT //////////
            if (sav.itemCount >= 2) sav.oxygen += event.obj.change + 1;
            else sav.oxygen += event.obj.change;
            ////////// ITEM EVENT //////////
        }
        else if (event.stat === `Fuel`) {
            ////////// ITEM EVENT //////////
            if (sav.itemCount >= 3) sav.fuel += event.obj.change + 1;
            else sav.fuel += event.obj.change;
            ////////// ITEM EVENT //////////
        }
        else if (event.stat === `Warp Pieces Collected`) {
            sav.warpCount++;
        }
        else if (event.stat === `Items Collected`) {
            sav.itemCount++;
        }
        else {}

        if (event.status === `Win` || event.status === `Lose`) {

        }
        else {}

        this.props.hideModals();
    }

    render() {
        return (
            <div id="modalResult">
                <p id="modalText">{event.obj.text}</p>
                {event.change ?
                    <div className="modalOutcome">
                        <p className="modalOutcomeText">{event.stat}: </p>
                        <img className="modalOutcomeIcon" src={event.icon} />
                        <p className="modalOutcomeText">{event.obj.change}</p>
                    </div> :
                    <React.Fragment />}
                <div className="modalBtn" onClick={this.handleClick}>
                    <p className="modalBtnText">Continue</p>
                </div>
            </div>
        )
    }
}

export default ModalResult;