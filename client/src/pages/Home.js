import React from 'react';
import Sky from '../components/Sky';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import MainMenu from '../components/MainMenu';

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Sky page="home" />
                <Nav fChangePage={this.props.fChangePage} page="home" />
                <MenuBar page="home" />
                <div id="mainDrop">
                    <MainMenu fLoadGame={this.props.fLoadGame} fNewGame={this.props.fNewGame} fSignOut={this.props.fSignOut} fSignIn={this.props.fSignIn} fSignUp={this.props.fSignUp} signedIn={this.props.signedIn} username={this.props.username} />
                </div>
                <Footer page="home" />
            </React.Fragment>
        )
    }
}

export default Home;