import React from 'react';
import { Howl } from 'howler';
import g from '../utils/globals';

class ModalResult extends React.Component {

    sfx = () => {

        // Play tick sound
        let sound = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.15 });
        sound.play();
    }

    handleClick = () => {

        // Play continue sound
        let sfx = new Howl({ src: [`/sounds/sfx_continue.wav`], volume: 0.25 });
        sfx.play();

        // Checks if win or lose
        if (g.event.alert === `Win` || g.event.alert === `Lose`) {

            // Go to home page
            this.props.fChangePage(`home`);
        }
        else {
            if (g.event.stat === `Health`) {
                ////////// ITEM EVENT //////////
                if (g.sav.itemCount >= 1 && g.event.change < 0) g.sav.health += g.event.change + 1;
                else g.sav.health += g.event.change;
                ////////// ITEM EVENT //////////
            }
            else if (g.event.stat === `Oxygen`) {
                ////////// ITEM EVENT //////////
                if (g.sav.itemCount >= 2 && g.event.change < 0) g.sav.oxygen += g.event.change + 1;
                else g.sav.oxygen += g.event.change;
                ////////// ITEM EVENT //////////
            }
            else if (g.event.stat === `Fuel`) {
                ////////// ITEM EVENT //////////
                if (g.sav.itemCount >= 3) g.sav.fuel += g.glob.FUELgainI;
                else g.sav.fuel += g.glob.FUELgain;
                ////////// ITEM EVENT //////////
            }
            else if (g.event.stat === `Warp Pieces Collected`) {
                g.sav.warpCount++;
            }
            else if (g.event.stat === `Items Collected`) {
                g.sav.itemCount++;
            }
            else { }

            this.props.hideModals();
        }
    }

    render() {
        return (
            <div className={g.event.change ? (g.event.change < 0 ? `mNeg` : `mPos`) : `mNeu`} id="modalEventBox">
                <p className="lShade" id="modalEventText">{g.event.text}</p>
                {g.event.change ?
                    <div className="modalOutcome">
                        <p className="anim mShade modalOutcomeText">{g.event.stat}: </p>
                        <img className="anim mShade modalOutcomeIcon" alt="" src={g.event.icon} />
                        <p className="anim mShade modalOutcomeText">{
                            (g.event.stat === `Health` && g.sav.itemCount >= 1 && g.event.change < 0) ||
                                (g.event.stat === `Oxygen` && g.sav.itemCount >= 2 && g.event.change < 0) ||
                                (g.event.stat === `Fuel` && g.sav.itemCount >= 3) ?
                                g.event.change + 1 : g.event.change
                        }</p>
                    </div> :
                    <React.Fragment />}
                {g.event.alert === `Win` || g.event.alert === `Lose` ?
                    <div className="modalBtn" onClick={this.handleClick} onMouseEnter={this.sfx}>
                        <p className="modalBtnText">Continue</p>
                    </div> :
                    <div className="modalBtn" onClick={this.handleClick} onMouseEnter={this.sfx}>
                        <p className="modalBtnText">Continue</p>
                    </div>}
            </div>
        )
    }
}

export default ModalResult;