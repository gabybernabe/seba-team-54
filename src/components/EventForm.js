"use strict";

import React from 'react';
import { Card, Button, FontIcon, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './Page';


const style = { maxWidth: 500 };


class EventForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title : '',
            date : '',
            description : '',
            participants: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeParticipants = this.handleChangeParticipants.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(value) {
        this.setState(Object.assign({}, this.state, {title: value}));
    }

    handleChangeDate(value) {
        this.setState(Object.assign({}, this.state, {date: value}));
    }

    handleChangeDescription(value) {
        this.setState(Object.assign({}, this.state, {description: value}));
    }

    handleChangeParticipants(value) {
        this.setState(Object.assign({}, this.state, {participants: value}));
    }

    handleSubmit(submitEvent) {
        submitEvent.preventDefault();

        let event = this.props.event;
        if(event == undefined) {
            event = {};
        }

        event.title = this.state.title;
        event.date = this.state.date;
        event.description = this.state.description;
        event.participants = this.state.participants;

        this.props.onSubmit(event);
    }


    render() {
        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Title"
                            id="TitleField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.title}
                            onChange={this.handleChangeTitle}
                            errorText="Title is required"/>
                        <TextField
                            label="Date"
                            id="DateField"
                            type="string"
                            className="md-row"
                            required={true}
                            value={this.state.date}
                            onChange={this.handleChangeDate}
                            errorText="Date is required"/>
                        <TextField
                            label="Description"
                            id="DescriptionField"
                            type="string"
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
                        <Button id="submit" type="submit"
                                disabled={this.state.title == undefined || this.state.title == '' || this.state.date == undefined || this.state.date == ''}
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </Page>
        );
    }
}

export default withRouter(EventForm);