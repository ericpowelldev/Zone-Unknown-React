import React from 'react';
import { Howl, Howler } from 'howler';
import g from '../utils/globals';

class Sound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sound: g.sound
        };
    }

    handleClick = () => {
        if (g.sound) {
            Howler.volume(0);
        }
        else {
            Howler.volume(1);
        }
        g.sound = !g.sound;
        this.setState({ sound: g.sound });
    }

    render() {
        return (
            <img id="sound" src={this.state.sound ? "/images/vectors/other/soundOn.svg" : "/images/vectors/other/soundOff.svg"} onClick={this.handleClick} />
        )
    }
}

export default Sound;