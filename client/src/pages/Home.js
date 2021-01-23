import React from "react";
import Sky from "../components/Sky";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import MainMenu from "../components/MainMenu";

export default function Home(props) {
  return (
    <React.Fragment>
      <Sky page="home" />
      <Nav fChangePage={props.fChangePage} page="home" />
      <MenuBar page="home" />
      <div id="mainDrop">
        <MainMenu fLoadGame={props.fLoadGame} fNewGame={props.fNewGame} fSignOut={props.fSignOut} fSignIn={props.fSignIn} fSignUp={props.fSignUp} signedIn={props.signedIn} username={props.username} />
      </div>
      <Footer page="home" />
    </React.Fragment>
  );
}
