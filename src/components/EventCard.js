"use strict";

import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardText, TableFooter,Grid, Cell } from 'react-md';
import { SimpleLink } from './SimpleLink';
import UserService from "../services/UserService";
import { TableRow, TableColumn, FontIcon, Button } from 'react-md';
import { Link } from 'react-router-dom';


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

const style = { textAlign:'justify', wordWrap:'break-word',  wordBreak: 'break-all' };

export class EventCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card style ={{width:'100%', fontSize:'auto', boxSizing:'border-box', wordBreak: 'break-all'}} key={this.props.children}>
                <img src={"https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg"}
                     style={{width:'100%'}}/>
                <CardTitle title={
                    <SimpleLink to={`/participate/${this.props.event._id}`}>{this.props.event.title}</SimpleLink>
                } style={{style}}>

                </CardTitle>
                <CardText style={{style}}>{this.props.event.level}</CardText>
                <CardText style={{style}}>{this.props.event.location}</CardText>
                <CardText style={{style}}>{this.props.event.description}</CardText>
                <CardText style={{style}}>{this.props.event.start}</CardText>
                <CardText style={{style}}>{this.props.event.transport}</CardText>
                <Participate>
                    <Link style={{color:'white'}} to={`/participate/${this.props.event._id}`}>{'Join'}</Link>
                </Participate>
                <Grid>
                    <Cell size={6}>
                        {UserService.isAuthenticated() ?
                            <Link to={`/edit/${this.props.event._id}`}><FontIcon>mode_edit</FontIcon></Link>
                            : <Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link>
                        }
                        </Cell>
                    <Cell size={6} style={{textAlign:'right'}}>
                        {UserService.isAuthenticated() ?
                            <Button onClick={() => this.props.onDelete(this.props.event._id)} icon>delete</Button>
                            : <Link to={'/login'}><FontIcon>delete</FontIcon></Link>
                        }
                    </Cell>
                </Grid>

            </Card>
        );
    }
}