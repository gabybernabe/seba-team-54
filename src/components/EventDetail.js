"use strict";

import React from 'react';
import { Card, CardTitle, CardText} from 'react-md';

import EventService from '../services/EventService';

import Page from './Page';
import styled from "styled-components";
import Slider from "react-slick";

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

export class EventDetail extends React.Component {

    constructor(props) {
        super(props);
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
            <Page>
                <Card style={style} className="md-block-centered">
                    <CardTitle title={this.props.event.title} subtitle={this.props.event.description} />

                    <CardText>
                        <p>
                            {this.props.event.location}
                        </p>
                        <p>
                            {this.props.event.participants}
                        </p>
                    </CardText>
                </Card>

                <div style={{ backgroundColor: 'none' }}>
                    <h1>Find an available hike</h1>
                    <div style={{ marginTop: '2.9%', width: '100%', height: '100%', display: 'flex', marginLeft: '30px' }} >
                        <Card style={{ width: '50%', height: '40%', marginLeft: '50px', marginRight: '50px' }}>
                            <Slider {...settings}>
                                <div>
                                    <img src="https://img.oastatic.com/img2/10674769/600x300r/pfalz--pfa-lzer-ha-henweg.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.oastatic.com/img2/10674769/600x300r/pfalz--pfa-lzer-ha-henweg.jpg" />
                                </div>
                                <div>
                                    <img src="https://img.oastatic.com/img2/10674769/600x300r/pfalz--pfa-lzer-ha-henweg.jpg" />
                                </div>
                                <div>
                                    <img src="http://placekitten.com/g/400/200" />
                                </div>
                            </Slider>
                            <CardTitle title="Name of the Hike " subtitle="Garmisch" />
                            <CardText>
                            </CardText>
                        </Card>
                        <Card style={{ width: '30%', height: '40%', marginLeft: '50px', marginRight: '50px' }}>
                            <img src={"https://www.outdooractive.com/api/staticmap?i=1044790&size=large&project=outdooractive"}/>
                            <CardText>
                                <HomeButton>Watch Route</HomeButton>
                            </CardText>
                        </Card>
                    </div>
                    <br></br>

                    <DivLevel>
                        <Text style={{ width: '50%' }}>
                            <ul>
                                <li>Tomorrow from 07:30 to 16:00</li>
                                <li>München Hbf, Platform 27</li>
                                <li>20/25</li>
                                <br></br>
                                <li><h3>Description</h3></li>
                                <CardText>
                                    <p style={{ fontSize: '16px', marginLeft: '1px', textAlign: 'justify' }}>
                                        If you live in Munich, you have mountains and valleys, lush green meadows, torrential ravines,
                                        crystal- clear streams and blue swimming lakes virtually at your doorstep. The entire experience
                                        lets you forget your daily cares and thoroughly enjoy life. And so lace up your hiking boots,
                                        pack your backpack and head up onto a mountain!</p>
                                    <br></br>
                                    <HomeButton>Confirm participation</HomeButton>
                                </CardText>
                            </ul>
                        </Text>
                        <Text style={{ marginLeft: '6%' }}>
                            <ul>
                                <li><h3>Route Details</h3></li>
                                <li>Distance: 10.5 km</li>
                                <li>Duration: 4 h</li>
                                <li>Up: 821 m</li>
                                <li>Down: 600 m</li>
                                <br></br>
                                <li><h3>Rating</h3></li>
                                <li>3.4/5</li>
                            </ul>
                        </Text>
                    </DivLevel>
                </div>
            </Page>
        );
    }
}