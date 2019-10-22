import React from 'react';
import { Howl, Howler } from 'howler';
import g from '../utils/globals';

class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sound: g.sound
        };
    }

    sfx = () => {

        // Play tick sound
        let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.15 });
        sfx.play();
    }

    handleClickSound = () => {

        // Play select sound
        let sfx = new Howl({ src: [`/sounds/sfx_select.wav`], volume: 0.15 });
        sfx.play();

        if (g.sound) {
            Howler.volume(0);
        }
        else {
            Howler.volume(1);
        }
        g.sound = !g.sound;
        this.setState({ sound: g.sound });
    }
    handleClickMenu = () => {

        // Play select sound
        let sfx = new Howl({ src: [`/sounds/sfx_select.wav`], volume: 0.15 });
        sfx.play();

        this.props.showModalMenu();
    }
    handleClickHowTo = () => {

        // Play select sound
        let sfx = new Howl({ src: [`/sounds/sfx_select.wav`], volume: 0.15 });
        sfx.play();

        this.props.showModalHowTo();
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
                    {this.props.page === `home` ?
                        <img className="anim mShade menuBtn" alt="Sound" src={this.state.sound ? "/images/vectors/other/soundOn.svg" : "/images/vectors/other/soundOff.svg"} onClick={this.handleClickSound} onMouseEnter={this.sfx} /> :
                        <React.Fragment>
                            <img className="anim mShade menuBtn" alt="Sound" src={this.state.sound ? "/images/vectors/other/soundOn.svg" : "/images/vectors/other/soundOff.svg"} onClick={this.handleClickSound} onMouseEnter={this.sfx} />
                            <img className="anim mShade menuBtn" alt="Chat" src="/images/vectors/game/chat.svg" onClick={this.handleClickChat} onMouseEnter={this.sfx} />
                            <img className="anim mShade menuBtn" alt="Menu" src="/images/vectors/game/menu.svg" onClick={this.handleClickMenu} onMouseEnter={this.sfx} />
                            <img className="anim mShade menuBtn" alt="Cog" src="/images/vectors/game/cog.svg" onClick={this.handleClickHowTo} onMouseEnter={this.sfx} />
                        </React.Fragment>}
                </div>
            </div>
        )
    }
}

export default MenuBar;