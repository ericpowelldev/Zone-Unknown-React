import React from "react";
import * as ReactDOM from "react-dom";
import socketIOClient from "socket.io-client";
import logic from "../utils/logic";
import API from "../utils/API";

var socket;

class ModalChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ``,
      messageArray: [],
      timestamp: null,
    };

    socket = socketIOClient.connect();

    // Message posts when recieved from server and runs postMessage function
    const postMessage = (data, cb) => {
      socket.on("RECEIVE_MESSAGE", (message) => cb(null, message));
      socket.emit("postMessage", data);
    };

    // Pushes emitted message to messageArray and resets state to update array
    postMessage(this.state.messageArray, (err, data) =>
      this.setState({
        messageArray: [...this.state.messageArray, data],
      })
    );

    const subscribeToTimer = (interval, cb) => {
      socket.on("timer", (timestamp) => cb(null, timestamp));
      socket.emit("subscribeToTimer", 5000);
    };
    subscribeToTimer(5000, (err, timestamp) => {
      // console.log(this.state.timestamp);
      this.loadMessages();
      this.setState({ timestamp: timestamp });
    });

    //On message submit
    this.sendMessage = () => {
      logic.sfx_continue();

      //sends message to server socket.io with username and message
      socket.emit("SEND_MESSAGE", {
        author: this.props.username,
        message: this.state.message,
      });

      this.setState({ message: "" });
      console.log(`MESSAGE SENT:`);
      this.handleFormSubmit();
      this.scrollToBottom();
    };
  }

  // Fills chat with previous messages
  componentDidMount() {
    this.loadMessages();
  }

  componentWillUnmount() {
    socket.off();
  }

  // Updates the scroll every time a message is rendered
  componentDidUpdate() {
    // logic.sfx_tick();
    this.scrollToBottom();
  }

  // Scroll chat window down with each new chat
  scrollToBottom = () => {
    const { messageList } = this.refs;
    const scrollHeight = messageList.scrollHeight;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  // API call to database for messages
  loadMessages = () => {
    API.getMessages()
      .then((res) => {
        let newArray = res.data.reverse();
        this.setState({
          messageArray: newArray.map((item) => {
            return { author: item.author, message: item.message };
          }),
        });
      })
      .catch((err) => console.log(err));
  };

  // API saves message to database called on message submit by socket.io
  handleFormSubmit = () => {
    // Checks to see if both fields have value
    if (this.props.username && this.state.message) {
      API.saveMessage({
        author: this.props.username,
        message: this.state.message,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  handleClick = () => {
    logic.sfx_back();
    this.props.hideModals();
  };

  keyPress = (event) => {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  };

  render() {
    return (
      <div id="modal">
        <div id="modalChat">
          <ol id="modalChatMessages" ref="messageList">
            {this.state.messageArray.map((item, index) => {
              return (
                <li className="modalChatItem" key={index}>
                  <span className="modalChatUser">{`${item.author}:`}</span>
                  {` ${item.message}`}
                </li>
              );
            })}
          </ol>
          <div id="modalChatForm">
            <input
              id="modalChatInput"
              name="msg_text"
              value={this.state.message}
              placeholder="Say something..."
              onChange={(event) => this.setState({ message: event.target.value })}
              onKeyUp={this.keyPress}
            />
            <img id="modalChatSend" alt="Send" src="/images/vectors/modal/send.svg" onClick={this.sendMessage} onMouseEnter={logic.sfx_tick} />
          </div>
        </div>
        <img className="anim mShade modalClose" alt="Close" src="/images/vectors/modal/close.svg" onClick={this.handleClick} onMouseEnter={logic.sfx_tick} />
      </div>
    );
  }
}

export default ModalChat;
