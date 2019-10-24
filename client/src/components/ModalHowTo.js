import React from 'react';
import logic from '../utils/logic';
import g from '../utils/globals';

class ModalHowTo extends React.Component {

    handleClick = () => {
        logic.sfx_back();
        this.props.hideModals();
    }

    render() {
        return (
            <div id="modal">
                <div id="modalHowTo">
                    <h1>How to Play</h1>
                    <p>The object of the game is to collect the 3 warp drive pieces and Uranium needed to get you back home. You are only able to move one hex at a time, and you can only reach the hexes next to you. Previously encountered hexes will no longer have events, but will still cost you Oxygen to move through. Every time you move you will lose {g.glob.O2loss} Oxygen. If you end your turn with 0 or less Oxygen, you will lose Health by the negative amount of Oxygen. Once your HP is at zero you are dead and the game is over. You spawn on the center tile of each planet, which is your ship. You can return to your ship at any time to save your progress, and other options will be available based on your inventory.</p>
                    <ul>
                        <li>* Save and replenish oxygen requires {g.glob.FUELrep} Fuel, and will replenish {g.glob.O2gain} Oxygen.</li>
                        <li>* Save and advance requires you to find the warp piece on that planet before advancing. Once you are on the 3rd planet, you will need to find the final warp piece and Uranium before you are able to go home.</li>
                        <li>* Save and continue will return you to the current planet without any change.</li>
                    </ul>
                    <p>You will always start the game with {g.glob.HPstart} Health and {g.glob.O2start} Oxygen and no Fuel or Items. You will gather Fuel as you explore the planet. Along the way you may also find other items that will increase your chances of survival. There are 6 items in total that can assist you on your journey.</p>
                    <ol>
                        <li>1. Shield: This item gives a +1 defense bonus on all negative HP events.</li>
                        <li>2. Rebreather: This item gives a +1 defense bonus on all negative O2 events.</li>
                        <li>3. Syphon: This item gives a +1 collection bonus on all gain fuel events.</li>
                        <li>4. AI Drone: This item helps you achieve better outcomes on dynamic HP events.</li>
                        <li>5. AI Drone Upgrade: This item helps you achieve better outcomes on dynamic O2 events.</li>
                        <li>6. Efficiency Tank: This item gives a +{g.glob.O2gainI - g.glob.O2gain} bonus when replenishing your O2 at the ship and raises your max O2 from {g.glob.O2max} to {g.glob.O2maxI}.</li>
                    </ol>
                </div>
                <img className="anim mShade modalClose" alt="Close" src="/images/vectors/modal/close.svg" onClick={this.handleClick} onMouseEnter={logic.sfx_tick} />
            </div>
        )
    }
}

export default ModalHowTo;