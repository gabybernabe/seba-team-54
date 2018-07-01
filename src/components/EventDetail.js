"use strict";

import React from 'react';
import { Card, CardTitle, CardText, Button, FontIcon } from 'react-md';

import Slider from "react-slick";
import { Grid, Cell } from 'react-md';
import { Link } from 'react-router-dom';
import UserService from "../services/UserService";
import EventService from "../services/EventService";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

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

        const urlAddress = "https://maps.googleapis.com/maps/api/geocode/json?address=+" + this.props.event.location + "&key=AIzaSyAXg2_VPNfWwGHlIPRcPM3yRrf-iPKWEL0"
        var latitude = ""
        var longitude = ""

        function doFetch(url) {
            console.log("2. Doing Fetch");
            return fetch(url).then((res) => res.json())
                ;
        }

        var coordinates = doFetch(urlAddress)
        console.log(coordinates)

        coordinates.then(function (result) {
            console.log(result.results[0].geometry.location) //will log results.
            latitude = result.results[0].geometry.location.lat
            longitude = result.results[0].geometry.location.lng
        })

        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: latitude, lng: longitude }}>
                {props.isMarkerShown && <Marker position={{ lat: latitude, lng: longitude }} />}
            </GoogleMap>
        ))

        for (let index = 0; index < this.props.event.participantList.length; index++) {
            <li>{this.props.event.participantList[index]}</li>
        }

        return (
            <div style={{ marginTop: '2.9%', display: 'flex', marginLeft: '20px', marginRight: '20px' }}>

                <Card style={{ width: '60%', fontSize: 'auto', boxSizing: 'border-box', wordBreak: 'break-all', marginRight: '30px', borderWidth: 0, borderRadius: 0 }} key={this.props.children}>
                    <Slider {...settings}>
                        <div>
                            <img src={this.props.event.imgUrls[0]} height="400px" width="680px" />
                        </div>
                        <div>
                            <img src={this.props.event.imgUrls[1]} height="400px" width="680px" />
                        </div>
                        <div>
                            <img src={this.props.event.imgUrls[0]} height="400px" width="680px" />
                        </div>
                    </Slider>
                    <CardTitle title={this.props.event.title} subtitle={this.props.event.organiserUsername} />

                    <CardText >
                        <h5>
                            <b>Departure: </b> {this.props.event.location}
                        </h5>
                        <h5>
                            <b>Participants: </b> {this.props.event.participantList.length} / {this.props.event.participants}
                        </h5>
                        <h5>
                            <b>Level: </b> {this.props.event.level}
                        </h5>
                        <h5>
                            <b>Date: </b> {this.props.event.date}
                        </h5>
                        <h4> <b>Description</b> </h4>
                        <h5 style={{ wordBreak: 'break-all' }}>
                            {this.props.event.description}
                        </h5>

                        {EventService.isParticipating(this.props.event.participantList, UserService.getCurrentUser().username) ?

                            <Button raised onClick={() => this.props.onParticipate(this.props.event._id)}>Remove Participation</Button>
                            :
                            UserService.isAuthenticated() ?
                                <Button flat primary swapTheming onClick={() => this.props.onParticipate(this.props.event._id)}>
                                    <Link style={{ color: 'white' }} to={`/participate/${this.props.event._id}`}>{'Participate'}</Link>
                                </Button>
                                :
                                <Button flat primary swapTheming>
                                    <Link style={{ color: 'white' }} to={'/login'}>Login to participate</Link>
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