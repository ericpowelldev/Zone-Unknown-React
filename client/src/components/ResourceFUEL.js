import React from 'react';
import glob from '../utils/glob';
import sav from '../utils/sav';

function ResourceFUEL() {

    return (
        <div className="resourceBar">
            <img className="anim mShade resourceImg" src="/images/vectors/game/fu.svg" />
            <div className={sav.fuel >= glob.FUELrep ? `resourceHold replenish` : `resourceHold norm`}>
                <p className="anim mShade resourceNum">{sav.fuel}</p>
            </div>
        </div>
    )
}

export default ResourceFUEL;