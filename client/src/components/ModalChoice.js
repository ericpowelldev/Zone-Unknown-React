import React from 'react';
import event from '../utils/event';
import logic from '../utils/logic';

class ModalChoice extends React.Component {

    handleClick(index) {
        let eO = {}
        eO.key = event.key;
        eO.obj = event.obj.choices[index].outcomes[logic.rdmInt(0, event.obj.choices[index].outcomes.length - 1)];
        eO.dynamic = false;
        eO.icon = event.icon;
        event = eO;

        this.props.showModalEvent();
    }

    render() {
        return (
            <div id="modalChoice">
                <p className="modalText">{event.obj.text}</p>
                { event.obj.choices.map((item, index) => (
                    <div className="modalBtn" onClick={this.handleClick(index)}>
                        <p className="modalBtnText">{item.text}</p>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default ModalChoice;