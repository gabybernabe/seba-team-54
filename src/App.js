import React, { Component} from 'react';
import Header from "./containers/Header/Header";
import Participate from "./containers/HomePage/Participate";
import Organize from "./containers/Organize/Organize";
import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Reviews from "./containers/Reviews/Reviews";


class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Header/>
                    <Route
                        exact path={"/"}
                        component={() => <Participate />}
                    />
                    <Route
                        exact path={"/organize"}
                        component={() => <Organize />}
                    />
                    <Route
                        exact path={"/reviews"}
                        component={() => <Reviews />}
                    />
                </div>
             </Router>
        );
    }
}

export default App;