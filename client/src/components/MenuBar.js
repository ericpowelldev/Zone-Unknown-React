import React from 'react';
import { Howl, Howler } from 'howler';

class MenuBar extends React.Component {

    constructor(props) {
        super(props)
    }

    sfx = () => {

        // Play tick sound
        let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.15 });
        sfx.play();
    }

    handleClickCog = () => {

        // Play select sound
        let sfx = new Howl({ src: [`/sounds/sfx_select.wav`], volume: 0.15 });
        sfx.play();

        this.props.showModalMenu();
    }
    handleClickChat = () => {

        // Play select sound
        let sfx = new Howl({ src: [`/sounds/sfx_select.wav`], volume: 0.15 });
        sfx.play();

        this.props.showModalChat();
    }

    render() {
        return (
            <div id="menu">
                <div id="menuBar">
                    <img className="anim hShade" id="menuImg" src="/images/vectors/game/menu.svg" />
                    <img className="anim mShade menuBtn" src="/images/vectors/game/cog.svg" onClick={this.handleClickCog} onMouseEnter={this.sfx} />
                    <img className="anim mShade menuBtn" src="/images/vectors/game/chat.svg" onClick={this.handleClickChat} onMouseEnter={this.sfx} />
                </div>
            </div>
        )
    }
}

export default MenuBar;