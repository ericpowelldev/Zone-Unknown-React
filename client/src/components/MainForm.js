import React from 'react';
import logic from '../utils/logic';

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

    componentDidMount() {
        document.addEventListener("keyup", this.keyPress, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keyup", this.keyPress, false);
    }
    keyPress = (event) => {
        if (event.keyCode === 13) {
            this.handleSignIn();
        }
    }

    handleChange(event) {
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
                    placeholder="Username (3-25 characters)"
                    value={this.state.username.toLowerCase()}
                    onChange={this.handleChange} />
                <input
                    className="mainMenuInput"
                    id="passwordInput"
                    type="password"
                    name="password"
                    placeholder="Password (6-25 characters)"
                    value={this.state.password}
                    onChange={this.handleChange} />
                <input
                    className="mainMenuInput"
                    id="confirmInput"
                    type="password"
                    name="confirm"
                    placeholder="*Confirm Password (Sign up only)"
                    value={this.state.confirm}
                    onChange={this.handleChange} />
                <div className="mainMenuBtn" id="signInBtn" onClick={this.handleSignIn} onMouseEnter={logic.sfx_tick}>
                    <img className="mainMenuImg" alt="" src="/images/vectors/home/signIn.svg" />
                    <p className="mainMenuBtnText">Sign In</p>
                </div>
                <div className="mainMenuBtn" id="signUpBtn" onClick={this.handleSignUp} onMouseEnter={logic.sfx_tick}>
                    <img className="mainMenuImg" alt="" src="/images/vectors/home/signUp.svg" />
                    <p className="mainMenuBtnText">Sign Up</p>
                </div>
            </div>
        )
    }

}

export default MainForm;