"use strict";

import React, { Component} from 'react';

import BlogForm from './../components/BlogForm';
import BlogService from '../services/BlogService';

import Page from '../components/Page';

class BlogFormView extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if (true){
            this.setState({
                loading: false,
                article: undefined,
                error: undefined
            });
        }
        else {
            this.setState({
                loading: true,
                error: undefined
            });

            let id = this.props.match.params.id;

            BlogService.getBlog(id).then((data) => {
                this.setState({
                    article: data,
                    loading: false,
                    error: undefined
                });
            }).catch((e) => {
                console.error(e);
            });
        }

    }

    updateArticle(article) {
        if(this.state.article == undefined) {
            BlogService.createBlog(article).then((data) => {
                console.log(article);
                //this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating article'}));
            });
        } else {
            BlogService.updateBlog(article).then((data) => {
                console.log(article);
                //this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while updating Article'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <div className="modalOverlay">
                <h1>Write a new Article</h1>
                <BlogForm article={this.state.article} onSubmit={(article) => this.updateArticle(article)} error={this.state.error} />
            </div>
        );
    }
}

export default BlogFormView
