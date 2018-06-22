"use strict";

import React from 'react';
import { Card, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';


const style = { maxWidth: 500 };


class EventForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.event != undefined) {
            this.state = {
                title : props.event.title,
                location : props.event.location,
                start : props.event.start,
                end : props.event.end,
                description : props.event.description,
                participants: props.event.participants,
                transport: props.event.transport
            };
        } else {
            this.state = {
            title : '',
            location : '',
            start : '',
            end : '',
            description : '',
            participants: '',
            transport: ''
            };
        }


        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeParticipants = this.handleChangeParticipants.bind(this);
        this.handleChangeTransport = this.handleChangeTransport.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(value) {
        this.setState(Object.assign({}, this.state, {title: value}));
    }

    handleChangeLocation(value) {
        this.setState(Object.assign({}, this.state, {location: value}));
    }

    handleChangeStart(value) {
        this.setState(Object.assign({}, this.state, {start: value}));
    }

    handleChangeEnd(value) {
        this.setState(Object.assign({}, this.state, {end: value}));
    }

    handleChangeDescription(value) {
        this.setState(Object.assign({}, this.state, {description: value}));
    }

    handleChangeParticipants(value) {
        this.setState(Object.assign({}, this.state, {participants: value}));
    }

    handleChangeTransport(value) {
        this.setState(Object.assign({}, this.state, {transport: value}));
    }

    handleSubmit(submitEvent) {
        submitEvent.preventDefault();

        let event = this.props.event;
        if(event == undefined) {
            event = {};
        }

        event.title = this.state.title;
        event.location = this.state.location;
        event.start = this.state.start;
        event.end = this.state.end;
        event.description = this.state.description;
        event.participants = this.state.participants;
        event.transport = this.state.transport;

        this.props.onSubmit(event);
    }


    render() {
        return (

                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Hike name"
                            id="TitleField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.title}
                            onChange={this.handleChangeTitle}
                            errorText="Title is required"/>
                        <TextField
                            label="Departure location"
                            id="LocationField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.location}
                            onChange={this.handleChangeLocation}
                            errorText="Location is required"/>
                        <TextField
                            label="Start"
                            id="StartField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.start}
                            onChange={this.handleChangeStart}
                            errorText="Date is required"/>
                        <TextField
                            label="End"
                            id="EndField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.end}
                            onChange={this.handleChangeEnd}
                            errorText="Date is required"/>
                        <TextField
                            label="Description"
                            id="DescriptionField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.description}
                            onChange={this.handleChangeDescription}/>
                        <TextField
                            label="Participants"
                            id="ParticipantsField"
                            type="number"
                            className="md-row"
                            required={false}
                            value={this.state.participants}
                            onChange={this.handleChangeParticipants}/>
                        <TextField
                            label="Transport"
                            id="TransportsField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.transport}
                            onChange={this.handleChangeTransport}/>
                        <Button id="submit" type="submit"
                                disabled={this.state.title == undefined || this.state.title == '' || this.state.start == undefined || this.state.start == '' || this.state.end == undefined || this.state.end == ''}
                                raised primary className="md-cell md-cell--2">Organize</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
        );
    }
}

export default withRouter(EventForm);