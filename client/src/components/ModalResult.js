import React from 'react';
import sav from '../utils/sav';

class ModalResult extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // TESTING //
        console.log(`RESULT EVENT:`);
        console.log(sav.event);
        console.log(`\n`);
        console.log(`------------------------------`);
        console.log(`\n`);
        // TESTING //
    }

    handleClick = () => {

        if (sav.event.alert === `Win` || sav.event.alert === `Lose`) {
            window.location.href = `/`;
        }
        else {
            if (sav.event.stat === `Health`) {
                ////////// ITEM EVENT //////////
                if (sav.itemCount >= 1 && sav.event.change < 0) sav.health += sav.event.change + 1;
                else sav.health += sav.event.change;
                ////////// ITEM EVENT //////////
            }
            else if (sav.event.stat === `Oxygen`) {
                ////////// ITEM EVENT //////////
                if (sav.itemCount >= 2 && sav.event.change < 0) sav.oxygen += sav.event.change + 1;
                else sav.oxygen += sav.event.change;
                ////////// ITEM EVENT //////////
            }
            else if (sav.event.stat === `Fuel`) {
                ////////// ITEM EVENT //////////
                if (sav.itemCount >= 3) sav.fuel += sav.event.change + 1;
                else sav.fuel += sav.event.change;
                ////////// ITEM EVENT //////////
            }
            else if (sav.event.stat === `Warp Pieces Collected`) {
                sav.warpCount++;
            }
            else if (sav.event.stat === `Items Collected`) {
                sav.itemCount++;
            }
            else { }

            this.props.hideModals();
        }
    }

    render() {
        return (
            <div className={sav.event.change ? (sav.event.change < 0 ? `mNeg` : `mPos`) : `mNeu`} id="modalEventBox">
                <p className="lShade" id="modalEventText">{sav.event.text}</p>
                {sav.event.change ?
                    <div className="modalOutcome">
                        <p className="anim mShade modalOutcomeText">{sav.event.stat}: </p>
                        <img className="anim mShade modalOutcomeIcon" src={sav.event.icon} />
                        <p className="anim mShade modalOutcomeText">{
                            (sav.event.stat === `Health` && sav.itemCount >= 1 && sav.event.change < 0) ||
                            (sav.event.stat === `Oxygen` && sav.itemCount >= 2 && sav.event.change < 0) ||
                            (sav.event.stat === `Fuel` && sav.itemCount >= 3) ?
                            sav.event.change + 1 : sav.event.change
                        }</p>
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