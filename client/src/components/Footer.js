import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="anim" id="footerShape">
                    <div className="anim" id="footerFix">
                        <h1 className="anim mShade">Follow&nbsp;the&nbsp;project&nbsp;on&nbsp;<a href="https://github.com/ericpowell3d/Zone-Unknown-React" target="_blank">GitHub</a></h1>
                        <h2 className="anim lShade">A&nbsp;game&nbsp;by&nbsp;The&nbsp;Pompous&nbsp;Assets&nbsp;&copy;2019</h2>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;