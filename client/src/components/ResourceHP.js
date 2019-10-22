import React from 'react';
import g from '../utils/globals';

function ResourceHP() {

    return (
        <div className="resourceBar">
            <img className="anim mShade resourceImg" alt="HP" src="/images/vectors/game/hp.svg" />
            <div className={g.sav.health < g.glob.HPstart / 2 ? `resourceHold low` : (g.sav.health > g.glob.HPstart ? `resourceHold high` : `resourceHold norm`)}>
                <p className="anim mShade resourceNum">{g.sav.health}</p>
            </div>
        </div>
    )
}

export default ResourceHP;