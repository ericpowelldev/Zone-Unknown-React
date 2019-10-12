import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HexGrid from '../components/HexGrid';
import sav from '../utils/sav';
import event from '../utils/event';
import ModalEvent from '../components/ModalEvent';
import ModalMenu from '../components/ModalMenu';
import ModalChat from '../components/ModalChat';

class Game extends React.Component {

    state = {
        showModalEvent: false,
        showModalMenu: false,
        showModalChat: false
    }

    showModalEvent() {
        this.setState({ showModalEvent: true, showModalMenu: false, showModalChat: false });
    }
    showModalMenu() {
        this.setState({ showModalEvent: false, showModalMenu: true, showModalChat: false });
    }
    showModalChat() {
        this.setState({ showModalEvent: false, showModalMenu: false, showModalChat: true });
    }
    hideModals() {
        this.setState({ showModalEvent: false, showModalMenu: false, showModalChat: false });
        this.statCheck();
    }

    statCheck() {

        // Check if the player is dead
        if (sav.health <= 0) {
            event = {
                status: `Lose`,
                text: `You have died! You will now be returned to the menu.`
            };
            this.showModalEvent();
        }
        else {
            // Cap out the resources if you have too much
            if (sav.health >= 20) {
                sav.health = 20;
            }

            ////////// ITEM EVENT //////////
            if (sav.itemCount >= 6) {
                if (sav.oxygen >= 25) {
                    sav.oxygen = 25;
                }
            }
            else {
                if (sav.oxygen >= 20) {
                    sav.oxygen = 20;
                }
            }
            ////////// ITEM EVENT //////////

            if (sav.fuel >= 10) {
                sav.fuel = 10;
            }


        }
    }

    render() {
        return (
            <div id="mainDrop">
                <ModalEvent show={this.state.showModalEvent} showModalEvent={this.showModalEvent} hideModals={this.hideModals} />
                <ModalMenu show={this.state.showModalMenu} showModalMenu={this.showModalMenu} hideModals={this.hideModals} />
                <ModalChat show={this.state.showModalChat} showModalChat={this.showModalChat} hideModals={this.hideModals} />
                <Nav />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* <img className="resize" src="/images/vectors/hp.svg"></img>
            <img className="resize" src="/images/vectors/o2.svg"></img>
            <img className="resize" src="/images/vectors/fu.svg"></img>
            <img className="resize" src="/images/vectors/bio.svg"></img>
            <img className="resize" src="/images/vectors/chat.svg"></img>
            <img className="resize" src="/images/vectors/close.svg"></img>
            <img className="resize" src="/images/vectors/cog.svg"></img>
            <img className="resize" src="/images/vectors/globe.svg"></img>
            <img className="resize" src="/images/vectors/meteor.svg"></img>
            <img className="resize" src="/images/vectors/player.svg"></img>
            <img className="resize" src="/images/vectors/radar.svg"></img>
            <img className="resize" src="/images/vectors/send.svg"></img>
            <img className="resize" src="/images/vectors/ship.svg"></img>
            <img className="resize" src="/images/vectors/signIn.svg"></img>
            <img className="resize" src="/images/vectors/signOut.svg"></img>
            <img className="resize" src="/images/vectors/soundOff.svg"></img>
            <img className="resize" src="/images/vectors/soundOn.svg"></img>
            <img className="resize" src="/images/vectors/tab.svg"></img>
            <img className="resize" src="/images/vectors/uranium.svg"></img>
            <img className="resize" src="/images/vectors/user.svg"></img>
            <img className="resize" src="/images/vectors/warning.svg"></img>
            <img className="resize" src="/images/vectors/warp.svg"></img> */}
                <HexGrid showModalEvent={this.showModalEvent} hideModals={this.hideModals} />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </div>
        )
    }
}

export default Game;