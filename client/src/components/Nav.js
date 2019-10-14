import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div id="navShape">
                <Link to="/"><img id="navHead" src="/images/zu_head_color.png"></img></Link>
            </div>
        </nav>
    )
}

export default Nav;