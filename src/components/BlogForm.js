"use strict";

import React from 'react';
import { Card, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom';
import UserService from '../services/UserService';

import { AlertMessage } from './AlertMessage';
import BlogService from "../services/BlogService";


const style = { maxWidth: 500 };


class BlogForm extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.article != undefined) {
            this.state = {
                title : props.article.title,
                location : props.article.location,
                date : props.article.date,
                content : props.article.content,
                authorID: props.article.authorID,
                authorUsername: props.article.authorUsername,
            };
        } else {
            this.state = {
                title : '',
                location : '',
                date : '',
                content : '',
                authorID : '',
                authorUsername: '',
                img: ''
            };
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeImg = this.handleChangeImg.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    updateBlog(article) {
        if(this.state.article == undefined) {
            BlogService.createBlog(article).then((data) => {
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating blog'}));
            });
        } else {
            BlogService.updateBlog(article).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating blog'}));
            });
        }
    }

    handleChangeTitle(value) {
        this.setState(Object.assign({}, this.state, {title: value}));
    }

    handleChangeLocation(value) {
        this.setState(Object.assign({}, this.state, {location: value}));
    }

    handleChangeDate(value) {
        this.setState(Object.assign({}, this.state, {date: value}));
    }

    handleChangeContent(value) {
        this.setState(Object.assign({}, this.state, {content: value}));
    }

    handleChangeImg(value) {
        this.setState(Object.assign({}, this.state, {img: value}));
    }

    handleSubmit(submitArticle) {
        submitArticle.preventDefault();

        let article = this.props.article;
        if(article == undefined) {
            article = {};
        }

        article.title = this.state.title;
        article.location = this.state.location;
        article.date = this.state.date;
        article.content = this.state.content;
        article.authorID = UserService.getCurrentUser().id;
        article.authorUsername = UserService.getCurrentUser().username;
        article.img = this.state.img;

        this.props.onSubmit(article);
    }


    render() {
        return (
                <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                    <TextField
                        label="Post title"
                        id="TitleField"
                        type="text"
                        className="md-row"
                        required={true}
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                        errorText="Title is required"/>
                    <TextField
                        label="Location associated with this post (if not applicable, leave blank)"
                        id="LocationField"
                        type="text"
                        className="md-row"
                        required={true}
                        value={this.state.location}
                        onChange={this.handleChangeLocation}
                        errorText="Location is required"/>
                    <TextField
                        label="Date"
                        id="DateField"
                        type="text"
                        className="md-row"
                        required={true}
                        value={this.state.date}
                        onChange={this.handleChangeDate}
                        errorText="Date is required"/>
                    <TextField
                        label="Content"
                        id="ContentField"
                        type="text"
                        className="md-row"
                        rows={5}
                        required={false}
                        value={this.state.content}
                        onChange={this.handleChangeContent}/>
                    <Button id="submit" type="submit"
                            disabled={this.state.title == undefined || this.state.title == '' || this.state.date == undefined || this.state.date == '' }
                            raised primary className="md-cell md-cell--2">Submit</Button>
                    <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                </form>
        );
    }
}

export default withRouter(BlogForm);
