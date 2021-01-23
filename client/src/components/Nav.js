import React from "react";
import logic from "../utils/logic";
import g from "../utils/globals";

class Nav extends React.Component {
  handleClick = () => {
    logic.sfx_back();

    // Go to home page
    this.props.fChangePage(`home`);
  };

  render() {
    return (
      <nav>
        <div className="anim" id="navShape">
          <img
            className="anim hShade"
            id="navHead"
            alt="Header"
            onClick={this.handleClick}
            onMouseEnter={logic.sfx_tick}
            src={this.props.page === `game` ? `/images/zu_head_color${g.sav.planet + 1}.png` : `/images/zu_head_white.png`}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
