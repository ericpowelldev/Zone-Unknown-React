import React from 'react';
import g from '../utils/globals';

function ResourceFUEL() {

    return (
        <div className="resourceBar">
            <img className="anim mShade resourceImg" src="/images/vectors/game/fu.svg" />
            <div className={g.sav.fuel >= g.glob.FUELrep ? `resourceHold replenish` : `resourceHold norm`}>
                <p className="anim mShade resourceNum">{g.sav.fuel}</p>
            </div>
        </div>
    )
}

export default ResourceFUEL;