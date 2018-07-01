"use strict";

import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardText,Grid, Cell } from 'react-md';
import { SimpleLink } from './SimpleLink';
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
`;

const style = { textAlign:'justify', wordWrap:'break-word',  wordBreak: 'break-all' };

export class EventCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card style ={{width:'100%', fontSize:'auto', boxSizing:'border-box', wordBreak: 'break-all'}} key={this.props.children}>
                <img src={ this.props.event.imgUrls[0] } style={{width:'100%', maxHeight:'206px'}}/>
                <CardTitle
                    title={<SimpleLink to={`/participate/${this.props.event._id}`}>{this.props.event.title}</SimpleLink>}
                    subtitle={this.props.event.organiserUsername} style={{style}}>
                </CardTitle>
                <CardText style={{style, padding:'8px'}}>{this.props.event.level}</CardText>
                <CardText style={{style, padding:'8px'}}>{this.props.event.location}</CardText>
                <CardText style={{style, padding:'8px'}}>
                    {new Intl.DateTimeFormat('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(Date.parse(this.props.event.date))}</CardText>
                <Participate>
                    <Link style={{color:'white'}} to={`/participate/${this.props.event._id}`}>{'Join'}</Link>
                </Participate>
            </Card>
        );
    }
}