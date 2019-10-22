import React from 'react';
import Hex from './Hex';
import g from '../utils/globals';

class HexGrid extends React.Component {

    render() {
        let myP = g.sav.planets[g.sav.planet].hexes;

        return (
            <div id="grid" >
                <div id="gridFix">
                    <div className="g4" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -4 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g3" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -3 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g2" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -2 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g1" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === -1 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g0" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 0 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g1" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 1 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g2" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 2 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g3" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 3 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                    <div className="g4" >
                        {myP.map((hex, i) => (
                            hex.hexXY[0] === 4 ?
                                (<Hex key={i} index={i} class={hex.class} coords={`${hex.hexXY[0]}, ${hex.hexXY[1]}`} visited={hex.visited} reach={hex.reach} current={hex.current} genReach={this.generateReach} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />) :
                                (<React.Fragment key={i} />)
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default HexGrid;