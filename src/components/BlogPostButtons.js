import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from "@material-ui/core/es/Tooltip";

const styleDiv = {display:"inline-block", textAlign:"right", float:"right", marginRight:"1%"}

export function WriteButton(props) {
    const { classes } = props;
    return (
        <div style={styleDiv}>
            <Tooltip id="tooltip-fab" title="Write a new Post">
            <Button variant="fab" color="primary" aria-label="add" className="addButton" >
                <AddIcon />
            </Button>
            </Tooltip>
        </div>
    );
}

export function EditButton(props) {
    const { classes } = props;
    return (
        <div style={styleDiv}>
            <Tooltip id="tooltip-fab" title="Edit this Post">
                <Button variant="fab" color="primary" aria-label="add" className="addButton" >
                    <EditIcon />
                </Button>
            </Tooltip>
        </div>
    );
}

export function DeleteButton(props) {
    const { classes } = props;
    return (
        <div style={styleDiv}>
            <Tooltip id="tooltip-fab" title="Delete this Post">
                <Button variant="fab" color="primary" aria-label="add" className="addButton" >
                    <DeleteIcon />
                </Button>
            </Tooltip>
        </div>
    );
}


