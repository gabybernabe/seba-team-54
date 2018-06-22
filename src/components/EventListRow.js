"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon } from 'react-md';
import { Link } from 'react-router-dom';

import { SimpleLink } from './SimpleLink';

export class EventListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><SimpleLink to={`/participate/${this.props.event._id}`}>{this.props.event.title}</SimpleLink></TableColumn>
                <TableColumn>{this.props.event.description}</TableColumn>
                <TableColumn>{this.props.event.start}</TableColumn>
                <TableColumn><Link to={`/edit/${this.props.event._id}`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
            </TableRow>

        );
    }
}