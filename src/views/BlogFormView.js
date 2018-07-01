"use strict";

import React, { Component} from 'react';
import BlogForm from './../components/BlogForm';
import BlogService from '../services/BlogService';
import {Redirect} from "react-router-dom";

class BlogFormView extends Component {

    constructor(props) {
        super(props);
        this.state = {redirect:false}
    }

    componentWillMount(){
        if (typeof this.props.article === "undefined"){
            this.setState({
                loading: false,
                article: undefined,
                error: undefined
            });
        }
        else
            this.setState({ article : this.props.article })

    }

    updateArticle(article) {
        if(this.state.article === undefined) {
            BlogService.createBlog(article).then((data) => {
                console.log(article);
                this.setState({redirect:true});
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating article'}));
            });
        } else {
            BlogService.updateBlog(article).then((data) => {
                console.log(article);
                this.setState({redirect:true});
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating Article'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        } else if (this.state.redirect){
            return (<Redirect to="/"/>);
        }

        return (
            <div className="modalOverlay">
                <h1>Write a new Article</h1>
                {console.log(this.state.article)}
                <BlogForm article={this.state.article} onSubmit={(article) => this.updateArticle(article)} error={this.state.error} />
            </div>
        );
    }
}

export default BlogFormView
