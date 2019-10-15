import React from 'react';
import glob from '../utils/glob';
import sav from '../utils/sav';

function ResourceO2() {

    return (
        <div className="resourceBar">
            <img className="anim mShade resourceImg" src="/images/vectors/game/o2.svg" />
            <div className={sav.oxygen <= 0 ? `resourceHold low` : (sav.oxygen > glob.O2start ? `resourceHold high` : `resourceHold norm`)}>
                <p className="anim mShade resourceNum">{sav.oxygen}</p>
            </div>
        </div>
    )
}

export default ResourceO2;