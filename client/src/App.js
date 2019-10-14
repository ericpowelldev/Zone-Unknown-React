import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Sky from './components/Sky';
import logic from './utils/logic';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Sky />
                <Route exact path="/" component={Home} />
                <Route exact path="/game" component={Game} />
            </Router>
        );
    }
}

export default App;