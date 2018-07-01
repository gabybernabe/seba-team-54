"use strict";

import React from 'react';
import { Card, CardTitle, ListItem, CardText, Button, FontIcon, FlatList, DialogContainer, TextField, SVGIcon, Avatar, IconSeparator } from 'react-md';

import styled from "styled-components";
import Slider from "react-slick";
import { Grid, Cell } from 'react-md';
import { Link } from 'react-router-dom';
import { SimpleLink } from './SimpleLink';
import UserService from "../services/UserService";
import EventService from "../services/EventService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const style = { maxWidth: 500 };


const DivLevel = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-top: 40px;
    height:34px;
`;

const Text = styled.label`
    padding: 15px 45px;
    font-size: 16px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    width: 30%;
`;

const HomeButton = styled.button`
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px;
    font-family: inherit;
    overflow: visible;
    box-sizing: border-box;
    margin-left:70%;
`;

const Participate = styled.button`
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    display: inline-block;
    margin-bottom: 1em;
    margin-left:1em;
    font-size: auto;
    font-weight: 300;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px;
    font-family: inherit;
    overflow: visible;
    box-sizing: border-box;
    break-word: break-all;
    column-count: 3;
column-gap: 20px;
`;

const imageArray = [
    'https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg',
    'https://i.pinimg.com/originals/3c/d5/ff/3cd5ff662865c91f8753fc5224e02b44.jpg',
    'http://1.bp.blogspot.com/-xP2EdSZuo94/VB_cegS6LAI/AAAAAAAAkbg/UphZdGzJ8aQ/s1600/P1040301.jpg',
    'https://media0.trover.com/T/54fad7a3e9ae42087a003955/fixedw_large_4x.jpg',
    'https://assets.cicerone.co.uk/filestore/productImages/sampleroutephotos/_w1200_h1200/804_SP0.jpg'
];


export class EventDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    prettifyParticipantList(list) {
        return this.props.event.participantList.toString()
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: 47.4711256, lng: 10.976179 }}>
                {props.isMarkerShown && <Marker position={{ lat: 47.4711256, lng: 10.976179 }} />}
            </GoogleMap>
        ))

        return (

            <div style={{ marginTop: '2.9%', display: 'flex', marginLeft: '20px', marginRight: '20px' }}>

                <Card style={{ width: '60%', fontSize: 'auto', boxSizing: 'border-box', wordBreak: 'break-all', marginRight: '30px', borderWidth: 0, borderRadius: 0 }} key={this.props.children}>
                    <Slider {...settings}>
                        <div>
                            <img src={this.props.event.imgUrls[0]} height="400px" width="680px" />
                        </div>
                        <div>
                            <img src={this.props.event.imgUrls[0]} height="400px" width="680px" />
                        </div>
                        <div>
                            <img src="https://img.oastatic.com/img2/10674769/600x300r/pfalz--pfa-lzer-ha-henweg.jpg" height="400px" width="680px" />
                        </div>

                    </Slider>
                    <CardTitle title={this.props.event.title} subtitle={this.props.event.description} />


                    <CardText >
                        <h5>
                            Departure: {this.props.event.location}
                        </h5>
                        <h5>
                            Participants: {this.props.event.participantList.length} / {this.props.event.participants}
                        </h5>
                        <h5>
                            Level: {this.props.event.level}
                        </h5>
                        <h5>
                            Time: {this.props.event.start}
                        </h5>
                        <h5>
                            List of participants: {this.props.event.participantList}
                        </h5>




                        {EventService.isParticipating(this.props.event.participantList, UserService.getCurrentUser().username) ?

                            <Button raised onClick={() => this.props.onParticipate(this.props.event._id)}>Remove Participation</Button>
                            :
                            UserService.isAuthenticated() ?
                                <Button flat primary swapTheming onClick={() => this.props.onParticipate(this.props.event._id)}>
                                    Participate
                        </Button>
                                :
                                <Button flat primary swapTheming>
                                    <Link to={'/login'}>Login to participate</Link>
                                </Button>

                        }
                    </CardText>
                    <Grid>
                        <Cell size={6}>
                            {UserService.isAuthenticated() && this.props.event.organiserUsername == UserService.getCurrentUser().username ?
                                <Link to={`/edit/${this.props.event._id}`}><FontIcon>mode_edit</FontIcon></Link>
                                : <div></div>
                            }
                        </Cell>
                        <Cell size={6} style={{ marginLeft: '5px', textAlign: 'right' }}>
                            {UserService.isAuthenticated() && this.props.event.organiserUsername == UserService.getCurrentUser().username ?
                                <Button onClick={() => this.props.onDelete(this.props.event._id)} icon>delete</Button>
                                : <div></div>
                            }
                        </Cell>
                    </Grid>

                </Card>

                <Card style={{ width: '40%', height: '50%', fontSize: 'auto', boxSizing: 'border-box', wordBreak: 'break-all' }} key={this.props.children}>
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAXg2_VPNfWwGHlIPRcPM3yRrf-iPKWEL0"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </Card>



            </div>

        );

    }
}