import React, { Component} from 'react';

import EventForm from './../components/EventForm';
import EventService from '../services/EventService';

import Page from '../components/Page';

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

        return (
            <Page>
                <h1>Organize a hike</h1>
                <EventForm event={this.state.event} onSubmit={(event) => this.updateEvent(event)} error={this.state.error} />
            </Page>
        );
    }
}

export default Organize