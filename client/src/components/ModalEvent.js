import React from 'react';
import event from '../utils/event';
import ModalChoice from './ModalChoice';
import ModalResult from './ModalResult';

function ModalEvent() {

    return (
        this.props.show ?
            <div id="modalEvent">
                {event.dynamic ?
                    <ModalChoice showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} /> :
                    <ModalResult hideModals={this.props.hideModals} />
                }
            </div> :
            <React.Fragment></React.Fragment>
    )
}

export default ModalEvent;