import React from "react";
import logic from "../utils/logic";
import g from "../utils/globals";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: g.sound,
    };
  }

  handleClickSound = () => {
    logic.sfx_select();
    logic.toggleMute();
    this.setState({ sound: g.sound });
  };
  handleClickMenu = () => {
    logic.sfx_select();
    this.props.showModalMenu();
  };
  handleClickHowTo = () => {
    logic.sfx_select();
    this.props.showModalHowTo();
  };
  handleClickChat = () => {
    logic.sfx_select();
    this.props.showModalChat();
  };

  render() {
    return (
      <div id="menu">
        <h1 className="anim mShade barTxt">MENU</h1>
        <div id="menuBar">
          {this.props.page === `home` ? (
            <img
              className="anim mShade menuBtn"
              alt="Sound"
              src={this.state.sound ? "/images/vectors/other/soundOn.svg" : "/images/vectors/other/soundOff.svg"}
              onClick={this.handleClickSound}
              onMouseEnter={logic.sfx_tick}
            />
          ) : (
            <React.Fragment>
              <img
                className="anim mShade menuBtn"
                alt="Sound"
                src={this.state.sound ? "/images/vectors/other/soundOn.svg" : "/images/vectors/other/soundOff.svg"}
                onClick={this.handleClickSound}
                onMouseEnter={logic.sfx_tick}
              />
              <img className="anim mShade menuBtn" alt="Chat" src="/images/vectors/game/chat.svg" onClick={this.handleClickChat} onMouseEnter={logic.sfx_tick} />
              <img className="anim mShade menuBtn" alt="Menu" src="/images/vectors/game/menu.svg" onClick={this.handleClickMenu} onMouseEnter={logic.sfx_tick} />
              <img className="anim mShade menuBtn" alt="Cog" src="/images/vectors/game/cog.svg" onClick={this.handleClickHowTo} onMouseEnter={logic.sfx_tick} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default MenuBar;
