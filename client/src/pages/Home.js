import React from 'react';
import { Link } from 'react-router-dom';
import Sky from '../components/Sky';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MainMenu from '../components/MainMenu';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Sky page="home" />
                <Nav page="home" />
                <div id="mainDrop">
                    <MainMenu fSignOut={this.props.fSignOut} fSignIn={this.props.fSignIn} fSignUp={this.props.fSignIn} signedIn={this.props.signedIn} username={this.props.username} />
                </div>
                <Footer page="home" />
            </React.Fragment>
        )
    }
}

export default Home;