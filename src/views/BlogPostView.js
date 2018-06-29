import React from 'react';
import EventService from '../services/EventService';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Card, CardTitle, CardText } from 'react-md';
import Page from '../components/Page'

import {FacebookShareButton,
    FacebookIcon,
    GooglePlusShareButton,
    GooglePlusIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon} from 'react-share';
import {DeleteButton, EditButton, WriteButton} from "../components/BlogPostButtons";
import BlogService from "../services/BlogService";
import UserService from "../services/UserService";

export class BlogPostView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading: false,
            post: {},
            currentUser: "",
        }

        //this.content = this.props.post.content.split(".");
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let idb = this.props.match.params.id;
        const {id, username} = UserService.getCurrentUser();
        this.setState({currentUser:username});

        BlogService.getBlog(idb).then((data) => {
            this.setState({
                post: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    editPost(id){
        BlogService.updateBlog(id,UserService.getCurrentUser().username);
        this.props.history.push('/');
    }

    deletePost(id){
        BlogService.deletePost(id).then(
            this.props.history.push('/')
        );
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        const url = "https://facebook.com"
        const shareText = 'Check this out'
        const shareStyle = {display:"inline-block", margin:'5px'}
        const h4Style = {display:"inline-block" ,padding:"0 16px"}
        const h3Style = {marginBottom:"0px",color:"maroon" ,padding:"0 16px"}
        console.log(this.state)

        return (

            <Page>
                <WriteButton active={UserService.isAuthenticated()}/>
                {this.state.currentUser === this.state.post.authorUsername && <EditButton post={this.state.post}/>}
                {this.state.currentUser === this.state.post.authorUsername && <DeleteButton id={this.state.post._id}/>}
                <Card style={{width:'90%', margin:'70px 5%'}}>
                    <CardTitle title={this.state.post.title}/>
                    <h3 style={h3Style}>{this.state.post.authorUsername}</h3>
                    <h4 style={h4Style}></h4>
                    <Card style={{width:'102%', marginLeft:'-1%'}}>
                        <img src={"https://images.pexels.com/photos/771079/pexels-photo-771079.jpeg?auto=compress&cs=tinysrgb&h=350"}
                             style={{width:'100%', objectFit:'cover', maxHeight:'400px'}}/>
                    </Card>
                    <CardText>
                        <p> <b>{this.state.post.content.split(".").slice(0,2).join(".")}. </b></p>
                        <p>{this.state.post.content.split(".").slice(2).join(".")}. </p>
                        <FacebookShareButton style={shareStyle} url={url}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton style={shareStyle} url={url}>
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <LinkedinShareButton style={shareStyle} url={url}>
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <GooglePlusShareButton style={shareStyle} url={url}>
                            <GooglePlusIcon size={32} round />
                        </GooglePlusShareButton>

                    </CardText>


                </Card>
            </Page>
        );
    }
}

export default BlogPostView;
