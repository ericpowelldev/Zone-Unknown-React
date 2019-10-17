import React from 'react';
import ModalChoice from './ModalChoice';
import ModalResult from './ModalResult';
import g from '../utils/globals';

class ModalEvent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="modal">
                {g.event.obj ?
                    <ModalChoice fSaveGame={this.props.fSaveGame} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} /> :
                    <ModalResult fSaveGame={this.props.fSaveGame} showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />}
            </div>
        )
    }
}

export default ModalEvent;