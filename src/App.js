import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./views/Home"
import Participate from "./views/Participate";
import Organize from "./views/Organize";
import Reviews from "./views/Reviews";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            routes: [
                { component: Home , path: '/', exact: true},
                { component: Participate , path: '/participate/:id'},
                { component: Organize , path: '/organize', exact: true},
                { component: Reviews , path: '/reviews', exact: true}
            ]
        };
    }

    render() {
        return(
            <Router>
                <Switch>
                    {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                </Switch>
            </Router>
        );
    }
}

export default App;