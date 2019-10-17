import React from 'react';
import { Howl, Howler } from 'howler';
import g from '../utils/globals';

class ModalMenu extends React.Component {

    constructor(props) {
        super(props)
    }

    sfx = () => {

        // Play tick sound
        let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.15 });
        sfx.play();
    }

    handleClick = () => {

        // Play back sound
        let sfx = new Howl({ src: [`/sounds/sfx_back.wav`], volume: 0.15 });
        sfx.play();

        this.props.hideModals();
    }

    render() {
        return (
            <div id="modal">
                <img className="anim mShade" id="modalClose" src="/images/vectors/modal/close.svg" onClick={this.handleClick} onMouseEnter={this.sfx} />
            </div>
        )
    }
}

export default ModalMenu;