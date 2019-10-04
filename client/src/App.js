import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Sky from './components/Sky';

function App() {
    return (
        <Router>
            <Sky />
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
        </Router>
    );
}

// class App extends Component() {
//     state = {

//     }

//     render() {
//         return (
//             <Sky />
//         );
//     }
// }

export default App;