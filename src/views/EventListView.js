import React from 'react';

import EventService from '../services/EventService';
import { EventList } from '../components/EventList';

import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Card, CardTitle, CardText } from 'react-md';
import Page from '../components/Page'

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

const LevelList =styled.option`
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

class EventListView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: [],
            date: ''
        };
        this.dateChanged = this.dateChanged.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        EventService.getEvents().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    dateChanged(d){
        this.setState({date: d});
    }

    render() {
        if (this.state.loading) {
            return (<Page><h2>Loading...</h2></Page>);
        }

        return (
            <Page>
            <div style={{backgroundColor:'white'}}>
                <Title>Find an available hike</Title>

                <DivLevel>
                    <Text>Select the level of experience:</Text>
                    <LevelButton  id="level">
                        <LevelList>Easy</LevelList>
                        <LevelList>Medium</LevelList>
                        <LevelList>Hard</LevelList>
                        <LevelList>Expert</LevelList>
                    </LevelButton>
                    <Text style={{marginLeft:'10%'}}>Select a Date for the hike:</Text>
                   <Picker>
                    <DatePicker style={{borderRadius:'4px'}} selected={this.state.date}
                                onChange={this.dateChanged}  />
                   </Picker>
                </DivLevel>
                <br></br>
                <div style={{marginTop:'2.9%', display:'flex', marginLeft:'30px'}} >
                    <Card style ={{width:'23.333%', marginLeft:'50px', marginRight:'50px'}}>
                        <img src={"https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg"}
                             style={{width:'100%'}}/>
                        <CardTitle title="Hike1 " subtitle="Munich" />
                        <CardText>
                            <p style={{fontSize:'12px', marginLeft:'20px', marginRight:'20px', textAlign:'justify'}}>If you live in Munich, you have mountains and valleys, lush green meadows, torrential ravines,
                                crystal- clear streams and blue swimming lakes virtually at your doorstep. The entire experience
                                lets you forget your daily cares and thoroughly enjoy life. And so lace up your hiking boots,
                                pack your backpack and head up onto a mountain!</p>
                            <HomeButton>More Info</HomeButton>
                        </CardText>
                    </Card>
                    <Card style ={{width:'23.333%',  marginLeft:'50px', marginRight:'50px'} }>
                        <img src={"https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg"}
                             style={{width:'100%'}}/>
                        <CardTitle title="Hike2 " subtitle="Munich" />
                        <CardText>
                            <p style={{fontSize:'12px', marginLeft:'20px', marginRight:'20px', textAlign:'justify'}}>If you live in Munich, you have mountains and valleys, lush green meadows, torrential ravines,
                                crystal- clear streams and blue swimming lakes virtually at your doorstep. The entire experience
                                lets you forget your daily cares and thoroughly enjoy life. And so lace up your hiking boots,
                                pack your backpack and head up onto a mountain!</p>
                            <HomeButton>More Info</HomeButton>
                        </CardText>
                    </Card>
                    <Card style ={{width:'23.333%',  marginLeft:'50px'} }>
                        <img src={"https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg"}
                             style={{width:'100%'}}/>
                        <CardTitle title="Hike3 " subtitle="Munich" />
                        <CardText>
                            <p style={{fontSize:'12px', marginLeft:'20px', marginRight:'20px', textAlign:'justify'}}>If you live in Munich, you have mountains and valleys, lush green meadows, torrential ravines,
                                crystal- clear streams and blue swimming lakes virtually at your doorstep. The entire experience
                                lets you forget your daily cares and thoroughly enjoy life. And so lace up your hiking boots,
                                pack your backpack and head up onto a mountain!</p>
                            <HomeButton>More Info</HomeButton>
                        </CardText>
                    </Card>

                </div>
                <EventList data={this.state.data}/>
            </div>
            </Page>
        );
    }
}

export default EventListView;