import React from 'react';
import sav from '../utils/sav.js';
import EVT from '../utils/EVT.js';

class Hex extends React.Component {

    state = {
        coords: "",
        current: false,
        visited: false,
        reach: false,
    }

    gridMove = (props) => {
        let currentP = sav.planets[sav.planet];

        for (let i = 0; i < currentP.hexes.length; i++) {
            if (currentP.hexes[i].hexXY === sav.coords) {
                sav.oxygen -= 1;
                if (currentP.hexes[i].visited === true) {
                    statCheck(); // Check stats - Callback to save the game if player is still alive - Callback promise after save to re-render the hexes
                }
                else {
                    currentP.hexes[i].visited = true;
                    generateEvent(currentP.hexes[i].event);
                }
            }
        }
    }

    render() {
        return (
            <div className={

            }></div>
        )
    }
}

export default Hex;