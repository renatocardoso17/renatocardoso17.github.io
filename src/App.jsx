import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './modules/pages/home/Home';
import About from './modules/pages/about/About';
import Resume from './modules/pages/resume/Resume';
import Stats from './modules/pages/stats/Stats';
import Contact from './modules/pages/contact/Contact';

import NotFound from './modules/pages/not-found/NotFound';
// All of our CSS
import './static/css/main.scss';

// import Player from './modules/player/Player';

class App extends Component {
    render() {
        return (
            //<Router basename={BASE_PATH}>
            <Router basename="/">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/stats" component={Stats}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/resume" component={Resume}/>
                    {/*<Route path="/player" component={Player} />*/}
                    <Route component={NotFound} status={404}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
