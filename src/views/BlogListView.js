import React from 'react';
import EventService from '../services/EventService';
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


export class BlogListView extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        const url = "https://facebook.com"
        const shareText = 'Check this out'
        const shareStyle = {display:"inline-block", margin:'5px'}
        const h4Style = {marginBottom:"0px",color:"maroon"}
        const h5Style = {display:"inline-block"}
        const styleImg = {width:'35%', margin:'0 0 1px 2%', height:"100%", display:"table-cell", float:"right"}
        const stylePostTitle = {width:"80%"}
        const styleListItem = {width:'90%', margin:'0 5%', overflow:"hidden", display:"table"}

        return (

            <Page>
                <div style={{margin:"5%"}}>
                    <WriteButton/>
                    <h1 style={{margin:"20px 0"}}> BLOG </h1>
                </div>


            <Card style={styleListItem}>
                <Card style={styleImg}>
                    <img src={"https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg"}
                         style={{width:'100%', objectFit:'cover', height:'100%'}}/>
                </Card>
                <div className="postTitle" style={stylePostTitle}>
                    <div style={{display:"inline-block",float:"right", textAlign:"right", paddingTop:"24px"}}>
                        <h4 style={h4Style}>Matthieu Picard</h4>
                        <h5 style={h5Style}>07/04/2018</h5>
                    </div>
                    <CardTitle style={{display:"inline-block"}} title="FIRST BLOG POST"/>
                </div>
                <CardText style={{width:"65%"}}>
                    <p> <b>Lorem Ipsum is awesome</b></p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elementum tortor quis mattis. Fusce ac mi aliquam, volutpat nulla id,
                        pellentesque lacus. Quisque vel dolor ipsum. Donec non ante ex.
                    </p>
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

export default BlogListView;
