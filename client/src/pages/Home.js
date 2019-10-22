import React from 'react';
import Sky from '../components/Sky';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MainMenu from '../components/MainMenu';
import Sound from '../components/Sound';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Sky page="home" />
                <Sound />
                <Nav page="home" />
                <div id="mainDrop">
                    <MainMenu fLoadGame={this.props.fLoadGame} fNewGame={this.props.fNewGame} fSignOut={this.props.fSignOut} fSignIn={this.props.fSignIn} fSignUp={this.props.fSignUp} signedIn={this.props.signedIn} username={this.props.username} />
                </div>
                <Footer page="home" />
            </React.Fragment>
        )
    }
}

export default Home;