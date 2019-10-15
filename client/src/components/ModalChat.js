import React from 'react';

class ModalChat extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="modal">
                <img className="anim mShade" id="modalClose" src="/images/vectors/modal/close.svg" onClick={this.props.hideModals} />
            </div>
        )
    }
}

export default ModalChat;