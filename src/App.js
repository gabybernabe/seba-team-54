import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EventListView from "./views/EventListView"
import EventDetailView from "./views/EventDetailView";
import EventFormView from "./views/EventFormView";
import Reviews from "./views/Reviews";

import UserService from "./services/UserService";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            routes: [
                { component: EventListView , path: '/', exact: true},
                { component: EventDetailView , path: '/participate/:id'},
                { component: EventFormView , path: '/organize', exact: true},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<EventFormView {... props} />)
                        }
                        else {
                            return (<EventFormView {... props} />)
                            // TODO return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
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