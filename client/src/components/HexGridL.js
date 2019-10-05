import React from 'react';

class HexGridL extends React.Component {

    componentDidMount() {
        this.hexState();
    }

    hexState = () => {
        
    };

    render() {
        return (
            <div id="grid">
                <div id="gridFix">
                    <div className="g4">
                        <div className="hex " data-coordinates="-4, 0" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-4, -1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-4, -2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-4, -3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-4, -4" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g3">
                        <div className="hex" data-coordinates="-3, 1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-3, 0" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-3, -1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-3, -2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-3, -3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-3, -4" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g2">
                        <div className="hex" data-coordinates="-2, 2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-2, 1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-2, 0" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-2, -1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-2, -2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-2, -3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-2, -4" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g1">
                        <div className="hex" data-coordinates="-1, 3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-1, 2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-1, 1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-1, 0" data-current="false" data-visited="false" data-reach="true"></div>
                        <div className="hex" data-coordinates="-1, -1" data-current="false" data-visited="false" data-reach="true"></div>
                        <div className="hex" data-coordinates="-1, -2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-1, -3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="-1, -4" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g0">
                        <div className="hex" data-coordinates="0, 4" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="0, 3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="0, 2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="0, 1" data-current="false" data-visited="false" data-reach="true"></div>
                        <div className="hex" data-coordinates="0, 0" data-current="true" data-visited="true" data-reach="true"></div>
                        <div className="hex" data-coordinates="0, -1" data-current="false" data-visited="false" data-reach="true"></div>
                        <div className="hex" data-coordinates="0, -2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="0, -3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="0, -4" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g1">
                        <div className="hex" data-coordinates="1, 4" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="1, 3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="1, 2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="1, 1" data-current="false" data-visited="false" data-reach="true"></div>
                        <div className="hex" data-coordinates="1, 0" data-current="false" data-visited="false" data-reach="true"></div>
                        <div className="hex" data-coordinates="1, -1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="1, -2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="1, -3" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g2">
                        <div className="hex" data-coordinates="2, 4" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="2, 3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="2, 2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="2, 1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="2, 0" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="2, -1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="2, -2" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g3">
                        <div className="hex" data-coordinates="3, 4" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="3, 3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="3, 2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="3, 1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="3, 0" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="3, -1" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                    <div className="g4">
                        <div className="hex" data-coordinates="4, 4" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="4, 3" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="4, 2" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="4, 1" data-current="false" data-visited="false" data-reach="false"></div>
                        <div className="hex" data-coordinates="4, 0" data-current="false" data-visited="false" data-reach="false"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HexGridL;