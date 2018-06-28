"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import EventListView from "./views/EventListView"
import EventDetailView from "./views/EventDetailView";
import EventFormView from "./views/EventFormView";
import Reviews from "./views/Reviews";
import UserLoginView from "./views/UserLoginView";
import UserSignupView from "./views/UserSignupView";

import UserService from "./services/UserService";
import {BlogListView} from "./views/BlogListView";
import BlogPostView from "./views/BlogPostView";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            routes: [
                { component: EventListView , path: '/', exact: true},
                { component: EventDetailView , path: '/participate/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<EventFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/organize'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<EventFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
                { component: BlogListView , path: '/blog', exact: true},
                { component: BlogPostView , path: '/blog/:id'},
                { component: Reviews , path: '/reviews', exact: true},
                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'}
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