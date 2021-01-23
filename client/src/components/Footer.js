import React from "react";
import moment from "moment";
import logic from "../utils/logic";

export default function Footer() {
  return (
    <footer>
      <div className="anim" id="footerShape">
        <div className="anim" id="footerFix">
          <h1 className="anim mShade">
            Follow&nbsp;the&nbsp;project&nbsp;on&nbsp;
            <a href="https://github.com/ericpowell3d/Zone-Unknown-React" target="_blank" rel="noopener noreferrer" onClick={logic.sfx_select} onMouseEnter={logic.sfx_tick}>
              GitHub
            </a>
          </h1>
          <h2 className="anim lShade">
            A&nbsp;game&nbsp;by&nbsp;The&nbsp;Pompous&nbsp;Assets&nbsp;&copy;
            {moment().format(`YYYY`)}
          </h2>
        </div>
      </div>
    </footer>
  );
}
