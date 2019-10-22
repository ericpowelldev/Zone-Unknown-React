import React from 'react';
import { Link } from 'react-router-dom';
import { Howl, Howler } from 'howler';

class MainForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: ``,
            password: ``,
            confirm: ``,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    sfx = () => {
        
        // Play tick sound
        let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.25 });
        sfx.play();
    }

    handleChange(event) {
        this.sfx();
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSignIn = () => {
        this.props.fSignIn(this.state.username.toLowerCase(), this.state.password);
    }
    handleSignUp = () => {
        this.props.fSignUp(this.state.username.toLowerCase(), this.state.password, this.state.confirm);
    }

    render() {
        return (
            <div id="mainMenuBox">
                <h1 className="hShade" id="mainMenuHeader">Welcome to ZONE UNKNOWN</h1>
                <input 
                className="mainMenuInput"
                id="usernameInput"
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username.toLowerCase()}
                onChange={this.handleChange} />
                <input 
                className="mainMenuInput"
                id="passwordInput"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange} />
                <input 
                className="mainMenuInput"
                id="confirmInput"
                type="password"
                name="confirm"
                placeholder="*Confirm Password (Only if signing up)"
                value={this.state.confirm}
                onChange={this.handleChange} />
                <Link to="/" onClick={this.handleSignIn}><div className="mainMenuBtn" id="signInBtn" onMouseEnter={this.sfx}>
                    <p className="mainMenuBtnText">Sign In</p>
                </div></Link>
                <Link to="/" onClick={this.handleSignUp}><div className="mainMenuBtn" id="signUpBtn" onMouseEnter={this.sfx}>
                    <p className="mainMenuBtnText">Sign Up</p>
                </div></Link>
            </div>
        )
    }

}

export default MainForm;