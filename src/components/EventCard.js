"use strict";

import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardText,Grid, Cell } from 'react-md';
import { SimpleLink } from './SimpleLink';
import UserService from "../services/UserService";
import { FontIcon, Button } from 'react-md';
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

const imageArray= [
    'https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg',
    'https://i.pinimg.com/originals/3c/d5/ff/3cd5ff662865c91f8753fc5224e02b44.jpg',
    'http://1.bp.blogspot.com/-xP2EdSZuo94/VB_cegS6LAI/AAAAAAAAkbg/UphZdGzJ8aQ/s1600/P1040301.jpg',
    'https://media0.trover.com/T/54fad7a3e9ae42087a003955/fixedw_large_4x.jpg',
    'https://assets.cicerone.co.uk/filestore/productImages/sampleroutephotos/_w1200_h1200/804_SP0.jpg',
    'http://www.student.kuleuven.be/~r0576762/data/tum/seba/hohemunde.jpg',
    'http://www.student.kuleuven.be/~r0576762/data/tum/seba/pleisenspitze.jpg',
    'http://www.student.kuleuven.be/~r0576762/data/tum/seba/stones.jpg',
    'http://www.student.kuleuven.be/~r0576762/data/tum/seba/zugspitze.jpg',
    'http://www.student.kuleuven.be/~r0576762/data/tum/seba/hutte.jpg',
    'http://www.student.kuleuven.be/~r0576762/data/tum/seba/knappenhutte.jpg',
    'http://www.student.kuleuven.be/~r0576762/data/tum/seba/benediktenwand.jpg'
];

export class EventCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card style ={{width:'100%', fontSize:'auto', boxSizing:'border-box', wordBreak: 'break-all'}} key={this.props.children}>
                <img src={ this.props.event.imgUrls[0] }
                     // <img src={ this.props.event.imageUrl=='' ? imageArray[Math.floor((Math.random() * 12) + 1) - 1] : this.props.event.imageUrl}
                     style={{width:'100%', maxHeight:'206px'}}/>
                <CardTitle title={
                    <SimpleLink to={`/participate/${this.props.event._id}`}>{this.props.event.title}</SimpleLink>
                } subtitle={this.props.event.organiserUsername} style={{style}}>

                </CardTitle>
                <CardText style={{style, padding:'8px'}}>{this.props.event.level}</CardText>
                <CardText style={{style, padding:'8px'}}>{this.props.event.location}</CardText>
                <CardText style={{style, padding:'8px'}}>
                    {new Intl.DateTimeFormat('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(Date.parse(this.props.event.start))}</CardText>
                <Participate>
                    <Link style={{color:'white'}} to={`/participate/${this.props.event._id}`}>{'Join'}</Link>
                </Participate>
            </Card>
        );
    }
}