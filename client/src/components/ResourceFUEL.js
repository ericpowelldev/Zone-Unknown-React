import React from "react";
import g from "../utils/globals";

export default function ResourceFUEL() {
  return (
    <div className="resourceBar">
      <img className="anim mShade resourceImg" alt="FUEL" src="/images/vectors/game/fu.svg" />
      <div className={g.sav.fuel >= g.glob.FUELrep ? `resourceHold replenish` : `resourceHold norm`}>
        <p className="anim mShade resourceNum">{g.sav.fuel}</p>
      </div>
    </div>
  );
}
