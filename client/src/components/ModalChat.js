import React from 'react';
import { Howl, Howler } from 'howler';
import io from 'socket.io-client';
import API from '../utils/API';

class ModalChat extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            message: '',
            messageArray: []
        };

        // Constant server connects Socket.io to Socket.io-client
        this.socket = io(process.env.PORT || 'localhost:8080');

        // Message posts when recieved from server and runs postMessage function
        const postMessage = (data, cb) => {
            this.socket.on('RECEIVE_MESSAGE', message => cb(null, message));
            this.socket.emit('postMessage', data);
            console.log(this.state.messageArray)
        };

        // Pushes emitted message to messageArray and resets state to update array
        postMessage(this.state.messageArray, (err, data) => this.setState({
            messageArray: [...this.state.messageArray, data]
        }));

        //On message submit
        this.sendMessage = (event, cb) => {
            event.preventDefault();
            //sends message to server socket.io with username and message
            this.socket.emit('SEND_MESSAGE', {
                author: this.props.username,
                message: this.state.message
            });

            this.setState({ message: '' });
            console.log(`MESSAGE SENT FROM CLIENT: ${this.props.username},  ${this.state.message}`);
            this.handleFormSubmit(event);
        }
    }

    // Fills chat with previous messages
    componentDidMount() {
        this.loadMessages();
    }

    // API call to database for messages
    loadMessages = () => {
        API.getMessage()
            .then(res => this.setState({
                messageArray: res.data.map(item => {
                    return { author: item.author, message: item.message }
                })
            }))
            .catch(err => console.log(err));
    }

    // API saves message to database called on message submit by socket.io
    handleFormSubmit = event => {
        event.preventDefault();
        // Checks to see if both fields have value
        if (this.props.username && this.state.message) {
            API.saveMessage({
                author: this.props.username,
                message: this.state.message
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    };

    sfx = () => {

        // Play tick sound
        let sfx = new Howl({ src: [`/sounds/sfx_tick.wav`], volume: 0.15 });
        sfx.play();
    }

    handleClick = () => {

        // Play back sound
        let sfx = new Howl({ src: [`/sounds/sfx_back.wav`], volume: 0.15 });
        sfx.play();

        this.props.hideModals();
    }

    render() {
        return (
            <div id="modal">
                <div className="chatOverlayStyle">
                    <div className="chatHistoryStyle">
                        <div className="messageArray">
                            {this.state.messageArray.map((message, index) => {
                                return (<p className="chatMessageStyle" key={index}>
                                    {`${message.author}: ${message.message}`}
                                </p>)
                            })}
                        </div>
                    </div>
                    <div>
                        <form id="chatForm">
                            <input type="text" id="msg_text" name="msg_text" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} />
                            <input onClick={this.sendMessage} type="submit" id="submit" value="Send!" />
                        </form>
                    </div>

                    <img className="anim mShade" id="modalClose" src="/images/vectors/modal/close.svg" onClick={this.handleClick} onMouseEnter={this.sfx} />
                </div>
            </div>
        )
    }
}

export default ModalChat;