import React from 'react';
import { Link } from 'react-router-dom';
import sav from '../utils/sav';

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <div className="anim" id="navShape">
                    <Link to="/">
                        <img className="anim hShade" id="navHead" src=
                            {
                                this.props.page === `game` ?
                                    `/images/zu_head_color${sav.planet + 1}.png` :
                                    `/images/zu_head_white.png`
                            } />
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Nav;