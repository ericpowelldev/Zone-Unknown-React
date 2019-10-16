import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import logic from './utils/logic';
import glob from './utils/glob';
import sav from './utils/sav';
import API from './utils/API';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            username: ``
        };
        this.componentDidMount = this.componentDidMount.bind(this)
        this.getUser = this.getUser.bind(this)
        // this.updateUser = this.updateUser.bind(this)
        this.loadGame = this.loadGame.bind(this);
        this.newGame = this.newGame.bind(this);
        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
    }


    componentDidMount() {
        this.getUser()
    }

    getUser() {
        axios.get(`api/users/`)
            .then(res => {
                console.log(`\nGET USER:\n`);
                console.log(res.data);

                // If there is a user
                if (res.data.username) {
                    console.log(`\nUSER FOUND:\n`);
                    this.setState({
                        loggedIn: true,
                        username: res.data.username
                    });
                } else {
                    console.log('\nUSER NOT FOUND:\n');
                    this.setState({
                        loggedIn: false,
                        username: null
                    });
                }
            });
    }

    // updateUser(userObj) {
    //     this.setState(userObj)
    // }

    loadGame = () => {

        // GET the user save game object
        // API.getUser()
    }

    newGame = () => {

        // Reset stats to default
        sav.health = glob.HPstart;
        sav.oxygen = glob.O2start;
        sav.fuel = glob.FUELstart;
        sav.warpCount = glob.WARPstart;
        sav.itemCount = glob.ITEMstart;
        sav.coords = [0, 0];
        sav.planet = glob.PLANETstart;

        // Looping through each planet to generate
        for (let inc = 0; inc < 3; inc++) {

            // Declaring variables we need to generate a planet
            let psHPCount, nsHPCount, psO2Count, nsO2Count;
            let dHPCount, dO2Count, fuelCount, warpCount, itemCount;
            let eventArray = [`psHP`, `nsHP`, `psO2`, `nsO2`];
            let numArray = [];

            // Setting default random & set event counts for each specific planet
            if (inc === 0) {
                psHPCount = 6;
                nsHPCount = 3;
                psO2Count = 6;
                nsO2Count = 3;
                dHPCount = 2;
                dO2Count = 2;
                fuelCount = 3;
                warpCount = 1;
                itemCount = 3;
            }
            else if (inc === 1) {
                psHPCount = 10;
                nsHPCount = 8;
                psO2Count = 10;
                nsO2Count = 8;
                dHPCount = 3;
                dO2Count = 3;
                fuelCount = 6;
                warpCount = 1;
                itemCount = 2;
            }
            else if (inc === 2) {
                psHPCount = 16;
                nsHPCount = 14;
                psO2Count = 16;
                nsO2Count = 14;
                dHPCount = 4;
                dO2Count = 4;
                fuelCount = 10;
                warpCount = 2;
                itemCount = 1;
            }
            else {
                console.log(`WTF! How did you get here?`);
            }

            // TESTING //
            // console.log(`\n`);
            // console.log(`PLANET ${inc + 1} ASSIGNED EVENTS:`);
            // console.log(`\n`);
            // TESTING //

            // Loop to edit every hex
            for (let i = 0; i < sav.planets[inc].hexes.length; i++) {

                // Reset hex to default
                sav.planets[inc].hexes[i].visited = `false`;
                sav.planets[inc].hexes[i].reach = `false`;
                sav.planets[inc].hexes[i].current = `false`;
                sav.planets[inc].hexes[i].event = ``;
                sav.planets[inc].hexes[i].class = `hex`;

                // Generate a random event for each hex
                if (i !== (sav.planets[inc].hexes.length - 1) / 2) {
                    let rdmEvent = eventArray[Math.floor(Math.random() * eventArray.length)];

                    if (rdmEvent === `psHP` && psHPCount > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        psHPCount--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else if (rdmEvent === `nsHP` && nsHPCount > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        nsHPCount--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else if (rdmEvent === `psO2` && psO2Count > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        psO2Count--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else if (rdmEvent === `nsO2` && nsO2Count > 0) {
                        sav.planets[inc].hexes[i].event = rdmEvent;
                        nsO2Count--;
                        // console.log(`RANDOM EVENT ADDED "${rdmEvent}" to HEX${i}`);
                    }
                    else {
                        i--;
                    }
                }
                else {
                    sav.planets[inc].hexes[i].event = `ship`;
                    // console.log(`SET EVENT ADDED "ship" to HEX${i}`);
                }
            }

            // Loop to generate random placements for the set events
            for (let e = 0; e < (dHPCount + dO2Count + fuelCount + warpCount + itemCount); e++) {
                let num = logic.rdmInt(0, sav.planets[inc].hexes.length - 1);

                if (inc === 0) {
                    if (num !== 4 && num !== 5 && num !== 8 && num !== 9 && num !== 10 && num !== 13 && num !== 14 && !numArray.includes(num)) {
                        numArray.push(num);
                    }
                    else {
                        e--;
                    }
                }
                else if (inc === 1) {
                    if (num !== 11 && num !== 12 && num !== 17 && num !== 18 && num !== 19 && num !== 24 && num !== 25 && !numArray.includes(num)) {
                        numArray.push(num);
                    }
                    else {
                        e--;
                    }
                }
                else if (inc === 2) {
                    if (num !== 21 && num !== 22 && num !== 29 && num !== 30 && num !== 31 && num !== 38 && num !== 39 && !numArray.includes(num)) {
                        numArray.push(num);
                    }
                    else {
                        e--;
                    }
                }
                else {
                    console.log(`WTF! How did you get here?`);
                }
            }

            // TESTING //
            // console.log(`\n`);
            // console.log(`PLANET ${inc + 1} OVERRIDE EVENTS:`);
            // console.log(`\n`);
            // TESTING //

            // Loop to assign set events using the random number array
            for (let f = 0; f < numArray.length; f++) {
                if (dHPCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `dHP`;
                    dHPCount--;
                    // console.log(`RANDOM EVENT ADDED "dHP" to HEX${numArray[f]}`);
                }
                else if (dO2Count > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `dO2`;
                    dO2Count--;
                    // console.log(`RANDOM EVENT ADDED "dO2" to HEX${numArray[f]}`);
                }
                else if (fuelCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `fuel`;
                    fuelCount--;
                    // console.log(`SET EVENT ADDED "fuel" to HEX${numArray[f]}`);
                }
                else if (warpCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `warp`;
                    warpCount--;
                    // console.log(`SET EVENT ADDED "warp" to HEX${numArray[f]}`);
                }
                else if (itemCount > 0) {
                    sav.planets[inc].hexes[numArray[f]].event = `item`;
                    itemCount--;
                    // console.log(`SET EVENT ADDED "item" to HEX${numArray[f]}`);
                }
            }

            // TESTING //
            // console.log(`\n`);
            // console.log(`------------------------------`);
            // TESTING //
        }

        // TESTING //
        // console.log(`\n`);
        // console.log(`PLANET 1:`);
        // console.log(sav.planets[0].hexes);
        // console.log(`\n`);
        // console.log(`PLANET 2:`);
        // console.log(sav.planets[1].hexes);
        // console.log(`\n`);
        // console.log(`PLANET 3:`);
        // console.log(sav.planets[2].hexes);
        // console.log(`\n`);
        // console.log(`------------------------------`);
        // console.log(`\n`);
        // TESTING //
    }

    signOut = () => {
        this.setState({ signedIn: false, username: `` });
    }
    signIn = (username, password) => {
        axios
            .post('/api/users/', {
                username: username,
                password: password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response.data.username)
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.setState({ signedIn: true, username: username });
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }
    signUp = (username, password, confirm) => {
        if(password === confirm){
        axios.post('/api/users/', {
            username: username,
			password: password
		})
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('successful signup')
                this.signIn(username, password);
                    
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
    }else{
        console.log("Password does not match, Please try again!");
    }}

    render() {
        return (
            <Router>       
                <Route exact path="/" render={() => <Home fLoadGame={this.loadGame} fNewGame={this.newGame} fSignOut={this.signOut} fSignIn={this.signIn} fSignUp={this.signUp} signedIn={this.state.signedIn} username={this.state.username} />} />
                <Route exact path="/game" component={Game} />
            </Router>
        );
    }
}

export default App;