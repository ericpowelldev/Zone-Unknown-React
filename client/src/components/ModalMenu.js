import React from 'react';
import logic from '../utils/logic';
// import g from '../utils/globals';

class ModalMenu extends React.Component {

    handleClick = () => {
        logic.sfx_back();
        this.props.hideModals();
    }

    render() {
        return (
            <div id="modal">
                <div id="modalMenu">
                    <h1>Game Menu</h1>
                </div>
                <img className="anim mShade modalClose" alt="Close" src="/images/vectors/modal/close.svg" onClick={this.handleClick} onMouseEnter={logic.sfx_tick} />
            </div>
        )
    }
}

export default ModalMenu;