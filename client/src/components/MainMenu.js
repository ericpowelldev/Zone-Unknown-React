import React from 'react';
import MainWelcome from '../components/MainWelcome';
import MainForm from '../components/MainForm';

class MainMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainMenu">
                {
                    this.props.signedIn ?
                    <MainWelcome fSignOut={this.props.fSignOut} username={this.props.username} /> :
                    <MainForm fSignIn={this.props.fSignIn} fSignUp={this.props.fSignIn} />
                }
            </div>
        )
    }

}

export default MainMenu;