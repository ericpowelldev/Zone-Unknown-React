import React from "react";
import g from "../utils/globals";

export default function WarpBar() {
  return (
    <div id="warp">
      {g.sav.warpCount >= 1 ? (
        <React.Fragment>
          <h1 className="anim mShade barTxt">WARPS</h1>
          <div id="warpBar">
            <img className="anim mShade warpImg" alt="Warp" src="/images/vectors/warp/0.svg" />
            {g.sav.warpCount >= 2 ? <img className="anim mShade warpImg" alt="Warp" src="/images/vectors/warp/1.svg" /> : <React.Fragment />}
            {g.sav.warpCount >= 3 ? <img className="anim mShade warpImg" alt="Warp" src="/images/vectors/warp/2.svg" /> : <React.Fragment />}
            {g.sav.warpCount >= 4 ? <img className="anim mShade warpImg" alt="Warp" src="/images/vectors/warp/3.svg" /> : <React.Fragment />}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
}
