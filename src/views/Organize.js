import React, { Component} from 'react';
import { Card} from 'react-md';

import EventForm from './../components/EventForm';
import EventService from '../services/EventService';


class Organize extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.setState({
            loading: false,
            event: undefined,
            error: undefined
        });
    }

    updateEvent(event) {
        EventService.createEvent(event).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while creating event'}));
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (<EventForm event={this.state.event} onSubmit={(event) => this.updateEvent(event)} error={this.state.error} />);
    }
}

export default Organize