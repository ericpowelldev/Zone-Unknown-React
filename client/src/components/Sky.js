import React from 'react';
import sav from '../utils/sav';

class Sky extends React.Component {
    render() {
        return (
            <div id="sky">
                <div id="stars"></div>
                <div id="twinkling"></div>
                <div id={this.props.page === `game` ? `gradient${sav.planet + 1}` : `gradient0`}></div>
            </div>
        )
    }
}

export default Sky;