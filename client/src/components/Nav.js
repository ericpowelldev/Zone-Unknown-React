import React from 'react';
import { Link } from 'react-router-dom';
import { Howl, Howler } from 'howler';
import g from '../utils/globals';

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    sfx = () => {
        
        // Play back sound
        let sfx = new Howl({ src: [`/sounds/sfx_back.wav`], volume: 0.25 });
        sfx.play();
    }

    render() {
        return (
            <nav>
                <div className="anim" id="navShape">
                    <Link to="/">
                        <img className="anim hShade" id="navHead" onClick={this.sfx} src=
                            {
                                this.props.page === `game` ?
                                    `/images/zu_head_color${g.sav.planet + 1}.png` :
                                    `/images/zu_head_white.png`
                            } />
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Nav;