import React from 'react';
import ModalChoice from './ModalChoice';
import ModalResult from './ModalResult';
import sav from '../utils/sav';

class ModalEvent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="modal">
                {sav.event.obj ?
                    <ModalChoice showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} /> :
                    <ModalResult showModalEvent={this.props.showModalEvent} hideModals={this.props.hideModals} />}
            </div>
        )
    }
}

export default ModalEvent;