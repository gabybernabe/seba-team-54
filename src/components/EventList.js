"use strict";

import React from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';

import { EventListRow } from './EventListRow';

export const EventList = ({data, onDelete}) => (
        <DataTable plain>
            <TableHeader>
                <TableRow>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>Start</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((event, i) => <EventListRow key={i} event={event} onDelete={(id) => onDelete(id)}/>)}
            </TableBody>
        </DataTable>
);

