import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, SVGIcon, DialogContainer } from 'react-md';
import BlogFormView from "../views/BlogFormView";
import {Redirect} from "react-router-dom";
import BlogService from "../services/BlogService";

const styleDiv = {display:"inline-block", textAlign:"right", float:"right", marginRight:"1%"}


function show () { this.setState({visible:true})};
function hide () { this.setState({visible:false})};
function renderRedirect() { this.setState({redirect:true})};

export class WriteButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible:false,
            redirect:false
        };
        this.show = show.bind(this)
        this.hide = hide.bind(this)
        this.renderRedirect = renderRedirect.bind(this)
    };


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
export class EditButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = {visible: false};
        this.show = show.bind(this)
        this.hide = hide.bind(this)
        this.renderRedirect = renderRedirect.bind(this)
    };

    render() {
        const {visible} = this.state
        const actions = [{
            onClick: this.hide,
            primary: true,
            children: 'Cancel',
            },
            {onClick: () => {
                BlogService.updateBlog(this.props.post).then(
                    this.renderRedirect()
                )},
            primary: true,
            children: "Update"
            }
        ];

        return (
            <div>
                <div style={styleDiv}>
                    <Button floating primary tooltipLabel="Edit this Post" className="editButton" onClick={this.show}>
                        <EditIcon/>
                    </Button>
                </div>

                <DialogContainer
                    visible={visible}
                    id="createBlogPostDialog"
                    onHide={this.hide}
                    modal
                    actions = {actions}
                    dialogStyle={{width:"90%"}}>
                    <BlogFormView article={this.props.post}/>
                </DialogContainer>
            </div>
        );
    }
}

export class DeleteButton extends React.Component {
     constructor(props) {
        super(props)
        this.state = {
                visible: false,
                redirect: false,
            };
        this.show = show.bind(this)
        this.hide = hide.bind(this)
        this.renderRedirect = renderRedirect.bind(this)
    };



    render() {
        const {visible} = this.state
        const actions = [{
            onClick: this.hide,
            primary: true,
            children: 'Cancel',
            },
            {onClick: () => {
                BlogService.deleteBlog(this.props.id).then(
                   this.renderRedirect()
                )},
            primary : true,
            children: "Delete"
            }
        ];

        return (
            <div>
                <div style={styleDiv}>
                    {this.state.redirect && <Redirect to="/blog"/> }
                     <Button floating primary tooltipLabel="Delete this Post" className="deleteButton" onClick={this.show} >
                        <DeleteIcon />
                    </Button>
                </div>
                <DialogContainer
                    visible={visible}
                    id="createBlogPostDialog"
                    onHide={this.hide}
                    modal
                    actions={actions}
                    dialogStyle={{width: "90%"}}>
                    Are you sure you want to delete this post?
                </DialogContainer>
            </div>
        );
    }
}


