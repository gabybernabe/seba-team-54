"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';

export class EventListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn>{this.props.event.title}</TableColumn>
                <TableColumn>{this.props.event.description}</TableColumn>
                <TableColumn>{this.props.event.start}</TableColumn>
            </TableRow>

        );
    }
}