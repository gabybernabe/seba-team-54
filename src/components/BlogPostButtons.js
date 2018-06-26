import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, SVGIcon } from 'react-md';

const styleDiv = {display:"inline-block", textAlign:"right", float:"right", marginRight:"1%"}

export function WriteButton(props) {
    const { classes } = props;
    return (
        <div style={styleDiv}>
            <Button floating primary tooltipLabel="Write a new Post" className="addButton" >
                <AddIcon />
            </Button>
        </div>
    );
}

export function EditButton(props) {
    const { classes } = props;
    return (
        <div style={styleDiv}>
                <Button floating primary tooltipLabel="Edit this Post" className="editButton" >
                    <EditIcon />
                </Button>
        </div>
    );
}

export function DeleteButton(props) {
    const { classes } = props;
    return (
        <div style={styleDiv}>
                <Button floating primary tooltipLabel="Delete this Post" className="deleteButton" >
                    <DeleteIcon />
                </Button>
        </div>
    );
}


