import React from 'react';
import Sound from 'react-sound';

class Music extends React.Component {
    render() {
        return <Sound url="/sounds/AWayOut_Loop.wav" loop={true} playStatus="PLAYING" /> 
    };
}

export default Music;