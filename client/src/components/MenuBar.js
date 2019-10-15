import React from 'react';

class MenuBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="menu">
                <div id="menuBar">
                    <img className="anim hShade" id="menuImg" src="/images/vectors/game/menu.svg" />
                    <img className="anim mShade menuBtn" src="/images/vectors/game/cog.svg" onClick={this.props.showModalMenu} />
                    <img className="anim mShade menuBtn" src="/images/vectors/game/chat.svg" onClick={this.props.showModalChat} />
                </div>
            </div>
        )
    }
}

export default MenuBar;