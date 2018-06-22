import React from 'react';
import EventService from '../services/EventService';
import { EventList } from '../components/EventList';
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

export class BlogListView extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        const url = "https://facebook.com"
        const shareText = 'Check this out'
        const shareStyle = {display:"inline-block", margin:'5px'}

        return (


            <Page>
            <Card style={{width:'90%', margin:'0 5%'}}>
                <CardTitle title="FIRST BLOG POST"/>
                <div style={{display:"block"}}>
                    <h4>07/04/2018</h4>
                    <h4 style={{textAlign:'right'}}>Matthieu Picard</h4>
                </div>
                <Card style={{width:'102%', marginLeft:'-1%'}}>
                <img src={"https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg"}
                     style={{width:'100%', objectFit:'cover', maxHeight:'400px'}}/>
                </Card>
                <CardText>
                    <p> <b>Lorem Ipsum is awesome</b></p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elementum tortor quis mattis. Fusce ac mi aliquam, volutpat nulla id,
                        pellentesque lacus. Quisque vel dolor ipsum. Donec non ante ex. Nulla interdum quis nisl mattis molestie. Cras vestibulum nisi a nisl
                        vulputate maximus. Proin eleifend tempor est eget cursus. Aliquam erat volutpat. Ut mollis, orci sit amet auctor iaculis, nunc lectus
                        euismod tortor, id fringilla leo velit eu neque. Aliquam libero eros, semper ut justo eu, egestas porttitor arcu. Nullam est libero,
                        ullamcorper et condimentum a, egestas qui:ws mi. Proin iaculis vel mauris quis iaculis. Vivamus ac aliquam nibh. Nullam quis est tellus.
                    </p>
                    <FacebookShareButton style={shareStyle} url={url}>
                        <FacebookIcon
                            size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton style={shareStyle} url={url}>
                        <TwitterIcon
                            size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton style={shareStyle} url={url}>
                        <LinkedinIcon
                            size={32} round />
                    </LinkedinShareButton>
                    <GooglePlusShareButton style={shareStyle} url={url}>
                        <GooglePlusIcon
                            size={32} round />
                    </GooglePlusShareButton>

                </CardText>


            </Card>
        </Page>
        );
    }
}

export default BlogListView;
