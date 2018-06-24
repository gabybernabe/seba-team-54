"use strict";

import React, { Component} from 'react';

import EventForm from './../components/EventForm';
import EventService from '../services/EventService';
import {PageHeader} from 'react-bootstrap';

import Page from '../components/Page';

class EventFormView extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if (this.props.history.location.pathname == '/organize'){
            this.setState({
                loading: false,
                event: undefined,
                error: undefined
            });
        }
        else {
            this.setState({
                loading: true,
                error: undefined
            });

            let id = this.props.match.params.id;

            EventService.getEvent(id).then((data) => {
                this.setState({
                    event: data,
                    loading: false,
                    error: undefined
                });
            }).catch((e) => {
                console.error(e);
            });
        }

    }

    updateEvent(event) {
        if(this.state.event == undefined) {
            EventService.createEvent(event).then((data) => {
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating event'}));
            });
        } else {
            EventService.updateEvent(event).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating event'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page>
                <div class="container">
                    <PageHeader>
                        Organize a hike
                    </PageHeader>
                </div>
                <EventForm event={this.state.event} onSubmit={(event) => this.updateEvent(event)} error={this.state.error} />
            </Page>
        );
    }
}

export default EventFormView