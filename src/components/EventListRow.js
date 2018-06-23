"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from './SimpleLink';
import UserService from '../services/UserService';

export class EventListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><SimpleLink to={`/participate/${this.props.event._id}`}>{this.props.event.title}</SimpleLink></TableColumn>
                <TableColumn>{this.props.event.organiserUsername}</TableColumn>
                <TableColumn>{this.props.event.description}</TableColumn>
                <TableColumn>{this.props.event.start}</TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Link to={`/edit/${this.props.event._id}`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.event._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }
            </TableRow>

        );
    }
}