import React from 'react';

import EventService from '../services/EventService';
import { EventList } from '../components/EventList';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Page from '../components/Page'
import { EventListRow } from '../components/EventListRow';
import {EventCard} from "../components/EventCard";

const DivLevel = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    margin-top: 4em;
`;
const Text = styled.label`
    padding: 0em 0em 0em 3em;
    font-size: 16px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`;

const LevelButton = styled.select`
    color: #333;
    height:2em;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    background-color: #dfdfdf;
    border-color: #ccc;
    padding: 0em 2em 0em 2em;
    margin-bottom: 0;
    font-size: auto;
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
    margin-left: 2em;
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
    padding: 1em 0em;
    margin: 2em 0em 0em;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;   
`;
const Picker = styled.div`
    padding: 0em 4em 1em;
    vertical-align: baseline;
    display: inline-block;
`;


class EventListView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: [],
            date: moment()
        };
        this.dateChanged = this.dateChanged.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        EventService.getEvents().then((data) => {
            console.log(data);
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
            <div style={{backgroundColor:'white', width:'100%', minWidth:'300px'}}>
                <h1>Find an available hike: </h1>
                <DivLevel  style={{wordBreak: 'break-all'}}>
                    <div  style={{wordBreak: 'break-all'}}>
                        <Text>Select the level of experience:</Text>
                        <LevelButton  id="level">
                            <LevelList>Easy</LevelList>
                            <LevelList>Medium</LevelList>
                            <LevelList>Hard</LevelList>
                            <LevelList>Expert</LevelList>
                        </LevelButton>
                    </div>
                    <div  style={{wordBreak: 'break-all'}}>
                        <Text>Select a Date for the hike:</Text>
                        <Picker>
                            <DatePicker style={{borderRadius:'4px'}} selected={this.state.date}
                                onChange={this.dateChanged}  />
                        </Picker>
                    </div>
                </DivLevel>
                <br></br>
                <div style={{marginTop:'3em', display:'flex', marginLeft:'3em'}} >
                    {this.state.data.map((event, i) => <EventCard key={i} event={event}/>)}
                </div>
            </div>
            </Page>
        );
    }
}

export default EventListView;