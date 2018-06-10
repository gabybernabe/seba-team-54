import React, { Component} from 'react';
import Header from "./containers/Header/Header";
import Participate from "./containers/HomePage/Participate"


class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                    <Participate/>
            </div>
        );
    }
}

export default App;