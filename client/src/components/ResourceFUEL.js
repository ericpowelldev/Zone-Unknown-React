import React from 'react';
import sav from '../utils/sav';
import glob from '../utils/glob';

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