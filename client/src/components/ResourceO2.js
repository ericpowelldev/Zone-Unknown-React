import React from 'react';
import g from '../utils/globals';

function ResourceO2() {

    return (
        <div className="resourceBar">
            <img className="anim mShade resourceImg" src="/images/vectors/game/o2.svg" />
            <div className={g.sav.oxygen <= 0 ? `resourceHold low` : (g.sav.oxygen > g.glob.O2start ? `resourceHold high` : `resourceHold norm`)}>
                <p className="anim mShade resourceNum">{g.sav.oxygen}</p>
            </div>
        </div>
    )
}

export default ResourceO2;