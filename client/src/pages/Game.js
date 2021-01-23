import React from "react";
import Sky from "../components/Sky";
import ModalEvent from "../components/ModalEvent";
import ModalMenu from "../components/ModalMenu";
import ModalHowTo from "../components/ModalHowTo";
import ModalChat from "../components/ModalChat";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import ResourceBar from "../components/ResourceBar";
import WarpBar from "../components/WarpBar";
import ItemBar from "../components/ItemBar";
import HexGrid from "../components/HexGrid";
import logic from "../utils/logic";
import g from "../utils/globals";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.showModalEvent = this.showModalEvent.bind(this);
    this.showModalMenu = this.showModalMenu.bind(this);
    this.showModalHowTo = this.showModalHowTo.bind(this);
    this.showModalChat = this.showModalChat.bind(this);
    this.hideModals = this.hideModals.bind(this);
  }

  state = {
    showModalEvent: false,
    showModalMenu: false,
    showModalHowTo: false,
    showModalChat: false,
    key: 0,
  };

  componentDidMount() {
    this.generateReach();
  }

  showModalEvent() {
    this.setState({ showModalEvent: true, showModalMenu: false, showModalHowTo: false, showModalChat: false });
    this.generateReach();
  }
  showModalMenu() {
    this.setState({ showModalEvent: false, showModalMenu: true, showModalHowTo: false, showModalChat: false });
    this.generateReach();
  }
  showModalHowTo() {
    this.setState({ showModalEvent: false, showModalMenu: false, showModalHowTo: true, showModalChat: false });
    this.generateReach();
  }
  showModalChat() {
    this.setState({ showModalEvent: false, showModalMenu: false, showModalHowTo: false, showModalChat: true });
    this.generateReach();
  }
  hideModals() {
    this.setState({ showModalEvent: false, showModalMenu: false, showModalHowTo: false, showModalChat: false });
    this.statCheck();
    this.generateReach();
  }

  statCheck() {
    // Check if the player is dead
    if (g.sav.health <= 0) {
      g.event = {
        alert: `Lose`,
        text: `You have died! You will now be returned to the home page.`,
      };
      this.showModalEvent();
    } else {
      // Cap out the resources if you have too much
      if (g.sav.health >= g.glob.HPmax) g.sav.health = g.glob.HPmax;

      ////////// ITEM EVENT //////////
      if (g.sav.itemCount >= 6) {
        if (g.sav.oxygen >= g.glob.O2maxI) g.sav.oxygen = g.glob.O2maxI;
      } else {
        if (g.sav.oxygen >= g.glob.O2max) g.sav.oxygen = g.glob.O2max;
      }
      ////////// ITEM EVENT //////////

      if (g.sav.fuel >= g.glob.FUELmax) g.sav.fuel = g.glob.FUELmax;
    }
  }

  generateReach() {
    // Get current planet
    let myP = g.sav.planets[g.sav.planet].hexes;

    // Coordinates of current hex
    let myXY = g.sav.coords;
    let myX = myXY[0];
    let myY = myXY[1];

    // Loop through every hex & assign values
    for (let i = 0; i < myP.length; i++) {
      // Coordinates of current hex
      let thisX = myP[i].hexXY[0];
      let thisY = myP[i].hexXY[1];

      // If the current hex in the loop is equal to the current hex's coordinates
      if (`${thisX}${thisY}` === `${myX}${myY}`) {
        myP[i].visited = "true";
        myP[i].current = "true";
      } else {
        myP[i].current = "false";
      }

      // If the current hex in the loop is within reach
      if (Math.abs(thisX - myX) <= 1 && Math.abs(thisY - myY) <= 1 && thisX + thisY !== myX + myY) {
        myP[i].reach = "true";
      } else {
        myP[i].reach = "false";
      }

      // Set css class based on booleans
      if (myP[i].current === "true") {
        myP[i].class = "hex hex-current";
      } else if (myP[i].hexXY[0] === 0 && myP[i].hexXY[1] === 0 && myP[i].reach === "true") {
        myP[i].class = "hex hex-ship-reach";
      } else if (myP[i].hexXY[0] === 0 && myP[i].hexXY[1] === 0 && myP[i].reach === "false") {
        myP[i].class = "hex hex-ship-noReach";
      } else if (myP[i].visited === "true" && myP[i].reach === "true") {
        myP[i].class = "hex hex-visited-reach";
      } else if (myP[i].visited === "true" && myP[i].reach === "false") {
        myP[i].class = "hex hex-visited-noReach";
      } else if (myP[i].visited === "false" && myP[i].reach === "true") {
        myP[i].class = "hex hex-notVisited-reach";
      } else {
        myP[i].class = "hex hex-notVisited-noReach";
      }
    }

    // TESTING //
    // console.log(`PLANET ${g.sav.planet + 1}:`);
    // console.log(g.sav.planets[g.sav.planet].hexes);
    // console.log(`\n`);
    // console.log(`------------------------------`);
    // console.log(`\n`);
    // TESTING //

    this.setState({ key: logic.rdmFloat(0, 1) });
  }

  render() {
    return (
      <React.Fragment>
        <Sky page="game" />
        <div id="mainDrop">
          {this.state.showModalEvent ? (
            <ModalEvent fChangePage={this.props.fChangePage} fSaveGame={this.props.fSaveGame} showModalEvent={this.showModalEvent} hideModals={this.hideModals} />
          ) : (
            <React.Fragment />
          )}
          {this.state.showModalMenu ? <ModalMenu showModalMenu={this.showModalMenu} hideModals={this.hideModals} /> : <React.Fragment />}
          {this.state.showModalHowTo ? <ModalHowTo showModalHowTo={this.showModalHowTo} hideModals={this.hideModals} /> : <React.Fragment />}
          {this.state.showModalChat ? <ModalChat showModalChat={this.showModalChat} hideModals={this.hideModals} username={this.props.username} /> : <React.Fragment />}
          <Nav fChangePage={this.props.fChangePage} page="game" />
          <MenuBar page="game" showModalMenu={this.showModalMenu} showModalHowTo={this.showModalHowTo} showModalChat={this.showModalChat} />
          <ResourceBar />
          <WarpBar />
          <ItemBar />
          <HexGrid showModalEvent={this.showModalEvent} hideModals={this.hideModals} />
          <Footer page="game" />
        </div>
      </React.Fragment>
    );
  }
}

export default Game;
