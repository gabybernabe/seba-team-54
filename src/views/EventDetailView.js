import React from 'react';

import { EventDetail } from '../components/EventDetail';

import EventService from '../services/EventService';
import UserService from '../services/UserService';

class EventDetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        EventService.getEvent(id).then((data) => {
            this.setState({
                event: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    participateEvent(id){
        EventService.participateEvent(id,UserService.getCurrentUser().username);
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <EventDetail event={this.state.event} onParticipate={(id) => this.participateEvent(id)}/>
        );
    }
}

export default EventDetailView;