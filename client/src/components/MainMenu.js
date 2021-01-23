import React from "react";
import MainWelcome from "../components/MainWelcome";
import MainForm from "../components/MainForm";

class MainMenu extends React.Component {
  render() {
    return (
      <div id="mainMenu">
        {this.props.signedIn ? (
          <MainWelcome fLoadGame={this.props.fLoadGame} fNewGame={this.props.fNewGame} fSignOut={this.props.fSignOut} username={this.props.username} />
        ) : (
          <MainForm fSignIn={this.props.fSignIn} fSignUp={this.props.fSignUp} />
        )}
      </div>
    );
  }
}

export default MainMenu;
