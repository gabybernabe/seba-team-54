import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Card, CardTitle, CardText } from 'react-md';

import {FacebookShareButton,
    FacebookIcon,
    GooglePlusShareButton,
    GooglePlusIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon} from 'react-share';
import {Link} from "react-router-dom";




export class BlogListItem extends React.Component {



    constructor(props) {
        super(props);
    }

    render() {
        const url = "https://facebook.com"
        const shareStyle = {display:"inline-block", margin:'5px'}
        const h4Style = {marginBottom:"0px",color:"maroon"}
        const h5Style = {display:"inline-block"}
        const styleImg = {width:'35%', margin:'0 0 1px 2%', height:"100%", display:"table-cell", float:"right"}
        const stylePostTitle = {width:"80%"}
        const styleListItem = {width:'100%', margin:'15px 0%', overflow:"hidden", display:"table", paddingTop:"5px 15px"}
        const preview = this.props.post.content.slice(0,285)
        return(
            <Link style={{color:'white'}} to={`/blog/${this.props.post._id}`}>
                <Card style={styleListItem} >
                    <Card style={styleImg}>
                        <img src={"https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                             style={{width:'100%', objectFit:'cover', height:'100%'}}/>
                    </Card>
                    <div className="postTitle" style={stylePostTitle}>
                        <div style={{display:"inline-block",float:"right", textAlign:"right", paddingTop:"24px"}}>
                            <h4 style={h4Style}>
                                {this.props.post.authorUsername[0].toUpperCase() + this.props.post.authorUsername.slice(1)}
                            </h4>
                            <h5 style={h5Style}>{this.props.post.date.split("T").slice(0,1)}</h5>
                        </div>
                        <CardTitle style={{fontWeight:"900",display:"inline-block"}} title={this.props.post.title}/>
                    </div>
                    <CardText style={{width:"65%"}}>
                        <p> {preview}... </p>
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
            </Link>
        )
    }
}

//export const BlogListItem()
