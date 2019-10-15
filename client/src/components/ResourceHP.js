import React from 'react';
import glob from '../utils/glob';
import sav from '../utils/sav';

function ResourceHP() {

    return (
        <div className="resourceBar">
            <img className="anim mShade resourceImg" src="/images/vectors/game/hp.svg" />
            <div className={sav.health < glob.HPstart / 2 ? `resourceHold low` : (sav.health > glob.HPstart ? `resourceHold high` : `resourceHold norm`)}>
                <p className="anim mShade resourceNum">{sav.health}</p>
            </div>
        </div>
    )
}

export default ResourceHP;