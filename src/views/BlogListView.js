import React from 'react';
import EventService from '../services/EventService';
import { BlogListItem} from '../components/BlogListItem';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Card, CardTitle, CardText } from 'react-md';
import Page from '../components/Page'
import {WriteButton, EditButton, DeleteButton} from "../components/BlogPostButtons"

import {FacebookShareButton,
        FacebookIcon,
        GooglePlusShareButton,
        GooglePlusIcon,
        LinkedinShareButton,
        LinkedinIcon,
        TwitterShareButton,
        TwitterIcon} from 'react-share';

import Button from "@material-ui/core/es/Button/Button";
import AddIcon from '@material-ui/icons/Add';
import BlogService from "../services/BlogService";
import UserService from "../services/UserService";


export class BlogListView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: [],
            date: moment(),
            stringDate: "",
            level: 'select',
            active: false
        }
    }
    componentWillMount(){
        this.setState({
            loading: true
        });

        BlogService.getBlogs().then((data) => {
            console.log(data);
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {

        if (this.state.loading) {
            return (<Page><h2>Loading...</h2></Page>);
        }

        return (

            <Page>
                {console.log(this.state.data)}
                <div style={{margin:"5%"}}>
                    <WriteButton active={UserService.isAuthenticated()} visible={true}/>
                    <h1 style={{fontWeight:"800",margin:"20px 0"}}> BLOG </h1>
                </div>


                <div className="container">
                    {this.state.data.length === 0
                        ? <div><h2>Sorry, nothing posted yet. Come back later for more, or go to Organize to plan your owm hikes!</h2></div>
                        : <div>
                            {this.state.data.map((post, i) => <BlogListItem key={i} post={post}/>)}
                        </div>
                    }
                </div>
        </Page>
        );
    }
}

export default BlogListView;
