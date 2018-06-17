import React, { Component} from 'react';
import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from "./containers/components/Header";
import Participate from "./containers/views/Participate";
import Organize from "./containers/views/Organize";
import Reviews from "./containers/views/Reviews";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Event App',
            routes: [
                { component: Participate , path: '/', exact: true},
                { component: Organize , path: '/organize', exact: true},
                { component: Reviews , path: '/reviews', exact: true}
                //{ component: MovieDetailView , path: '/show/:id'},
                /*{ render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MovieFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},*/
                /*{ render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MovieFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/add',},*/
                /*{ component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'}*/
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