"use strict";

import React from 'react';
import { TableRow, TableColumn } from 'react-md';

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
            </TableRow>

        );
    }
}