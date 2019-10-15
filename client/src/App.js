import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import API from './utils/API';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signedIn: true,
            username: `CurlyBoi`
        };
        // this.componentDidMount = this.componentDidMount.bind(this)
        // this.getUser = this.getUser.bind(this)
        // this.updateUser = this.updateUser.bind(this)
        this.signOut = this.signOut.bind(this)
    }


    // componentDidMount() {
    //     this.getUser()
    // }

    // getUser() {
    //     axios.get(`/user/`)
    //         .then(res => {
    //             console.log(`\nGET USER:\n`);
    //             console.log(res.data);

    //             // If there is a user
    //             if (res.data.user) {
    //                 console.log(`\nUSER FOUND:\n`);
    //                 this.setState({
    //                     loggedIn: true,
    //                     username: res.data.user.username
    //                 });
    //             } else {
    //                 console.log('\nUSER NOT FOUND:\n');
    //                 this.setState({
    //                     loggedIn: false,
    //                     username: null
    //                 });
    //             }
    //         });
    // }

    // updateUser(userObj) {
    //     this.setState(userObj)
    // }

    signOut = () => {
        this.setState({ signedIn: false, username: `` });
    }
    signIn = (user) => {
        this.setState({ signedIn: true, username: user });
    }
    signUp = (user) => {
        this.signIn(user);
    }

    render() {
        return (
            <Router>
                <Route exact path="/" render={() => <Home fSignOut={this.signOut} fSignIn={this.signIn} fSignUp={this.signUp} signedIn={this.state.signedIn} username={this.state.username} />} />
                <Route exact path="/game" component={Game} />
            </Router>
        );
    }
}

export default App;