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
            </TableRow>
        );
    }
}