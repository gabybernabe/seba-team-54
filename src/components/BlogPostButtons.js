import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, SVGIcon, DialogContainer } from 'react-md';
import BlogFormView from "../views/BlogFormView";

const styleDiv = {display:"inline-block", textAlign:"right", float:"right", marginRight:"1%"}

export class WriteButton extends Component {

    constructor(props) {
        super(props)
        const { classes } = props;

        this.state = { visible : false };
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    };

    show () { this.setState({visible:true})};
    hide () { this.setState({visible:false})};


    render() {
        const {visible} = this.state
        const actions = [{
            onClick: this.hide,
            primary: true,
            children: 'Cancel',
        }];

        return (
            <div>
                <div style={styleDiv}>
                    <Button floating primary tooltipLabel="Write a new Post" className="addButton" onClick={this.show}>
                        <AddIcon/>
                    </Button>
                </div>
                <DialogContainer
                    visible={visible}
                    id="createBlogPostDialog"
                    onHide={this.hide}
                    modal
                    actions = {actions}
                    dialogStyle={{width:"90%"}}>
                    <BlogFormView/>
                </DialogContainer>

            </div>
        );
    }
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


