import React from 'react';
import event from '../utils/event';

class ModalResult extends React.Component {

    handleClick() {

        this.props.hideModals();
    }

    render() {
        return (
            <div id="modalResult">
                <p className="modalText">{event.obj.text}</p>
                <div className="modalOutcome">
                    <p className="modalOutcomeText">{event.stat}: </p>
                    <img className="modalOutcomeIcon" src={event.icon}></img>
                    <p className="modalOutcomeText">{event.obj.change}</p>
                </div>
                <div className="modalBtn" onClick={this.handleClick}>
                    <p className="modalBtnText">Continue</p>
                </div>
            </div>
        )
    }
}

export default ModalResult;