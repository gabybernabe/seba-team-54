import React from 'react';

import { EventDetail } from '../components/EventDetail';
import Page from '../components/Page';

import EventService from '../services/EventService';
import UserService from '../services/UserService';

import {PageHeader} from 'react-bootstrap';

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
            <Page>
                <div className="container">
                    <PageHeader>
                        {this.state.event.title}
                    </PageHeader>
                    <EventDetail event={this.state.event} onParticipate={(id) => this.participateEvent(id)}/>
                </div>
            </Page>
        );
    }
}

export default EventDetailView;