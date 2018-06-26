"use strict";

import React from 'react';
import { Card, CardTitle, CardText, Button, FontIcon} from 'react-md';

import Page from './Page';
import styled from "styled-components";
import Slider from "react-slick";
import {Grid, Cell} from 'react-md';
import { Link } from 'react-router-dom';

import UserService from "../services/UserService";
import EventService from "../services/EventService";


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

export class EventDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    prettifyParticipantList(list){
        return this.props.event.participantList.toString()
    }

    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
        };

        return (
            <Card style={style} className="md-block-left">
                <CardTitle title={this.props.event.title} subtitle={this.props.event.description} />

                <CardText>
                    <p>
                        departure: {this.props.event.location}
                    </p>
                    <p>
                        participants: {this.props.event.participants}
                    </p>
                    <p>
                        level: {this.props.event.level}
                    </p>
                    <p>
                        list of participants: {this.prettifyParticipantList(this.props.event.participantList)}
                    </p>
                    {EventService.isParticipating(this.props.event.participantList,UserService.getCurrentUser().username) ?
                        <Button raised disable="true">
                            Already participating
                        </Button>
                        :
                        <Button flat primary swapTheming onClick={() => this.props.onParticipate(this.props.event._id)}>
                            Participate
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
                    <Cell size={6} style={{textAlign:'right'}}>
                        {UserService.isAuthenticated() && this.props.event.organiserUsername == UserService.getCurrentUser().username ?
                            <Button onClick={() => this.props.onDelete(this.props.event._id)} icon>delete</Button>
                            : <div></div>
                        }
                    </Cell>
                </Grid>
            </Card>
        );
    }
}