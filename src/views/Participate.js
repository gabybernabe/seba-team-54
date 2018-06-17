import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Card, CardTitle, CardText } from 'react-md';
import Page from '../components/Page'
import Slider from "react-slick";

const Title = styled.label`
    padding: 15px 15px;
    font-size: 24px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;

`;

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

const LevelButton = styled.select`
    color: #333;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    background-color: #dfdfdf;
    border-color: #ccc;
    padding: 8px 12px;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    text-transform: none;
    overflow: visible;
    margin: 0;
    font: inherit;
    box-sizing: border-box;
`;

const LevelList = styled.option`
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;   
`;
const Picker = styled.div`
    width: 50%;
    padding: 8px 10px 5px;
    vertical-align: baseline;
    display: block;
    display: flex;
`;

const Columns = styled.div`
    width: 33.33333333%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 45px;
    padding-left: 45px;
    box-sizing: border-box;
    display: block;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    text-align: left; 
`;

const DivResultList = styled.div`
    box-sizing: border-box;
    border-style: solid;
    border-radius: 4px;
    border-color: #ccc; 
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

class Participate extends Component {

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

export default Participate;