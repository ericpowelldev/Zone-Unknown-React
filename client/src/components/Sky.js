import React from "react";
import g from "../utils/globals";

export default function Sky(props) {
  return (
    <div id="sky">
      <div id="stars"></div>
      <div id="twinkling"></div>
      <div id={props.page === `game` ? `gradient${g.sav.planet + 1}` : `gradient0`}></div>
    </div>
  );
}
