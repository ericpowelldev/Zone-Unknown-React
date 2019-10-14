import React from 'react';
import Hex from './Hex';
import logic from '../utils/logic';
import sav from '../utils/sav'

class HexGrid extends React.Component {

    constructor(props) {
        super(props);
        this.generateReach = this.generateReach.bind(this);
    }

    state = {
        key: 0
    }

    componentDidMount() {
        this.generateReach();
    }

    render() {
        let myP = sav.planets[sav.planet].hexes;

        return (
            <div id="grid" >
                <div id="gridFix">
                    <div className="g4">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -4 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g3">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -3 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g2">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -2 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g1">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -1 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g0">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 0 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g1">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 1 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g2">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 2 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g3">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 3 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g4">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 4 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    generateReach() {

        // Get current planet
        let myP = sav.planets[sav.planet].hexes;

        // Coordinates of current hex
        let myXY = sav.coords;
        let myX = myXY[0];
        let myY = myXY[1];

        // Loop through every hex & assign values
        for (let i = 0; i < myP.length; i++) {

            // Coordinates of current hex
            let thisXY = myP[i].hexXY;
            let thisX = myP[i].hexXY[0];
            let thisY = myP[i].hexXY[1];

            // If the current hex in the loop is equal to the current hex's coordinates
            if (`${thisX}${thisY}` === `${myX}${myY}`) {
                myP[i].visited = "true";
                myP[i].current = "true";
            }
            else {
                myP[i].current = "false";
            }

            // If the current hex in the loop is within reach
            if (Math.abs(thisX - myX) <= 1 && Math.abs(thisY - myY) <= 1 && thisX + thisY !== myX + myY) {
                myP[i].reach = "true";
            }
            else {
                myP[i].reach = "false";
            }

            // Set css class based on booleans
            if (myP[i].current === "true") {
                myP[i].class = "hex hex-current";
            }
            else if (myP[i].visited === "true" && myP[i].reach === "true") {
                myP[i].class = "hex hex-visited-reach";
            }
            else if (myP[i].visited === "true" && myP[i].reach === "false") {
                myP[i].class = "hex hex-visited-noReach";
            }
            else if (myP[i].visited === "false" && myP[i].reach === "true") {
                myP[i].class = "hex hex-notVisited-reach";
            }
            else {
                myP[i].class = "hex hex-notVisited-noReach";
            }
        }

        // TESTING //
        // console.log(`PLANET ${sav.planet + 1}:`);
        // console.log(sav.planets[sav.planet].hexes);
        // console.log(`\n`);
        // console.log(`------------------------------`);
        // console.log(`\n`);
        // TESTING //

        this.setState({ key: logic.rdmFloat(0, 1) });
    }
}

export default HexGrid;