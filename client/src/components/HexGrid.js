import React from 'react';
import Hex from './Hex';
import sav from '../utils/sav'
import logic from '../utils/logic';

class HexGrid extends React.Component {

    constructor(props) {
        super(props);
        this.doThis = this.doThis.bind(this);
    }

    state = {
        key: 0
    }

    componentDidMount() {
        logic.generatePlanets();
    }

    doThis() {
        this.setState({ key: logic.rdmInt(0, 1) });
    }

    render() {
        let myP = sav.planets[sav.planet].hexes;

        return (
            <div id="grid">
                <div id="gridFix">
                    <div className="g4">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -4 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g3">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -3 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g2">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -2 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g1">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -1 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g0">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 0 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g1">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 1 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g2">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 2 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g3">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 3 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                    <div className="g4">
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 4 ?
                                (<Hex key={`${i}`} index={`${i}`} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} />) :
                                (<React.Fragment key={`${i}`} />)
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default HexGrid;