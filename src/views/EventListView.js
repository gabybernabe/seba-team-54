import React from 'react';

import EventService from '../services/EventService';
import { EventList } from '../components/EventList';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import {Row, Col, PageHeader} from 'react-bootstrap';
import {Grid, Cell} from 'react-md';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Page from '../components/Page';
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
            date: moment(),
            level: 'select'
        };
        this.dateChanged = this.dateChanged.bind(this);
        this.levelChanged = this.levelChanged.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        EventService.getEvents('select','date').then((data) => {
            console.log(data);
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.log(e);
        });
    }

    levelChanged(event){
        this.setState({level: event.target.value});
        EventService.getEvents(event.target.value, '').then((data) => {
            console.log(data);
            this.setState({
                data: [...data]
            });
        }).catch((e) => {
            console.log(e);
        });
        console.log(event.target.value);
    }

    dateChanged(d){
        this.setState({date: d});
    }

    deleteEvent(id){
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        EventService.deleteEvent(id).then((message) => {

            let eventIndex = this.state.data.map(event => event['_id']).indexOf(id);
            let events = this.state.data;
            events.splice(eventIndex, 1);
            this.setState({
                data: [...events],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<Page><h2>Loading...</h2></Page>);
        }

        return (
            <Page>
                <div className="container">
                    <PageHeader>Find a hike</PageHeader>
                    <DivLevel  style={{wordBreak: 'break-all'}}>
                        <div  style={{wordBreak: 'break-all'}}>
                            <Text>Level:</Text>
                            <LevelButton  id="level" onChange={this.levelChanged} >
                                <LevelList value={'select'}>Select</LevelList>
                                <LevelList value={'easy'}>Easy</LevelList>
                                <LevelList value={'medium'} >Medium</LevelList>
                                <LevelList value={'hard'}>Hard</LevelList>
                                <LevelList value={'expert'}>Expert</LevelList>
                            </LevelButton>
                        </div>
                        <div  style={{wordBreak: 'break-all'}}>
                            <Text>Date:</Text>
                            <Picker>
                                <DatePicker style={{borderRadius:'4px'}} selected={this.state.date}
                                            onChange={this.dateChanged}  />
                            </Picker>
                        </div>
                    </DivLevel>
                </div>

                <div className="container">
                    <Grid>
                        {this.state.data.map((event, i) => <Cell size={4}><EventCard key={i} event={event} onDelete={(id) => this.deleteEvent(id)}/></Cell>)}
                    </Grid>
                </div>
            </Page>
        );
    }
}

export default EventListView;