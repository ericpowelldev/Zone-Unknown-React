import React from "react";
import ResourceHP from "./ResourceHP";
import ResourceO2 from "./ResourceO2";
import ResourceFUEL from "./ResourceFUEL";

export default function Resource() {
  return (
    <div id="resource">
      <h1 className="anim mShade barTxt">RESOURCES</h1>
      <ResourceHP />
      <ResourceO2 />
      <ResourceFUEL />
    </div>
  );
}
