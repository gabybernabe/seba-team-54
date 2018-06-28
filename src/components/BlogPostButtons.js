import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, SVGIcon, DialogContainer } from 'react-md';
import BlogFormView from "../views/BlogFormView";
import {Redirect} from "react-router-dom";

const styleDiv = {display:"inline-block", textAlign:"right", float:"right", marginRight:"1%"}


function show () { this.setState({visible:true})};
function hide () { this.setState({visible:false})};

export class WriteButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible:false,
            redirect:false
        };
        //FOR MODAL ON ON STARTUP
       // if (typeof props.visible === "undefined" || !props.visible)
       //     this.state = { visible:false };
       // else
       //     this.state = { visible:true };

        console.log(props)
        console.log(this.state)
        this.show = show.bind(this)
        this.hide = hide.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
    };

    renderRedirect() {
        this.setState({redirect:true});
    }


    render() {
        const {visible} = this.state
        const actions = [{
            onClick: this.hide,
            primary: true,
            children: 'Cancel',
        }];

        const tooltipLabel = this.props.active ? "Write a new blog post" : "Login or register to write a blog post"
        return (
            <div>
                {this.state.redirect && <Redirect to="/login"/>}
                <div style={styleDiv}>
                    <Button
                        floating
                        primary
                        tooltipLabel={tooltipLabel}
                        className="addButton"
                        onClick={this.props.active ? this.show : this.renderRedirect}>
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


