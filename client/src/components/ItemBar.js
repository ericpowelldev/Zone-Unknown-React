import React from "react";
import g from "../utils/globals";

function ItemBar() {
  return (
    <div id="item">
      {g.sav.itemCount >= 1 ? (
        <React.Fragment>
          <h1 className="anim mShade barTxt">ITEMS</h1>
          <div id="itemBar">
            <img className="anim mShade itemImg" alt="Item" src="/images/vectors/item/0.svg" />
            {g.sav.itemCount >= 2 ? <img className="anim mShade itemImg" alt="Item" src="/images/vectors/item/1.svg" /> : <React.Fragment />}
            {g.sav.itemCount >= 3 ? <img className="anim mShade itemImg" alt="Item" src="/images/vectors/item/2.svg" /> : <React.Fragment />}
            {g.sav.itemCount >= 4 ? <img className="anim mShade itemImg" alt="Item" src="/images/vectors/item/3.svg" /> : <React.Fragment />}
            {g.sav.itemCount >= 5 ? <img className="anim mShade itemImg" alt="Item" src="/images/vectors/item/4.svg" /> : <React.Fragment />}
            {g.sav.itemCount >= 6 ? <img className="anim mShade itemImg" alt="Item" src="/images/vectors/item/5.svg" /> : <React.Fragment />}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
}

export default ItemBar;
