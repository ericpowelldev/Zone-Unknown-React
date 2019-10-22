import React from 'react';
import { Howl } from 'howler';
import g from '../utils/globals';

class Nav extends React.Component {

    handleClick = () => {

        // Play back sound
        let sfx = new Howl({ src: [`/sounds/sfx_back.wav`], volume: 0.25 });
        sfx.play();

        // Go to home page
        this.props.fChangePage(`home`);
    }

    render() {
        return (
            <nav>
                <div className="anim" id="navShape">
                    <img className="anim hShade" id="navHead" alt="Header" onClick={this.handleClick} src=
                        {
                            this.props.page === `game` ?
                                `/images/zu_head_color${g.sav.planet + 1}.png` :
                                `/images/zu_head_white.png`
                        } />
                </div>
            </nav>
        )
    }
}

export default Nav;