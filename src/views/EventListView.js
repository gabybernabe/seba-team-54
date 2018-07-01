import React from 'react';

import EventService from '../services/EventService';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import {PageHeader} from 'react-bootstrap';
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

const FilterButton = styled.button`
  display: inline-block;
  height: 2em;
  font-size: 13px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  background-color: light-grey;
  border: none;
  border-radius: 8px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  &:hover {background-color: #a9a5a5}
`;


class EventListView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: [],
            date: moment(),
            stringDate: "",
            level: 'select',
            click:true
        };

        this.dateChanged = this.dateChanged.bind(this);
        this.levelChanged = this.levelChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        EventService.getEvents(this.state.level,this.state.stringDate).then((data) => {
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
        EventService.getEvents(event.target.value, this.state.stringDate).then((data) => {
            console.log(data);
            this.setState({
                data: [...data]
            });
        }).catch((e) => {
            console.log(e);
        });
        console.log(event.target.value);
    }

    dateChanged(date){
        let newStringDate = JSON.stringify(date).substring(1,11);
        this.setState({date: date, stringDate: newStringDate}, () => {
            EventService.getEvents(this.state.level,this.state.stringDate).then((data) => {
                console.log(data);
                this.setState({
                    data: [...data]
                });
            }).catch((e) => {
                console.log(e);
            });
            console.log( this.state.stringDate);
        });
    }

    handleClick(click){
        EventService.getEvents('select', '').then((data) => {
            console.log(data);
            this.setState({
                data: [...data]
            });
        }).catch((e) => {
            console.log(e);
        });
        console.log(click);
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
                                            onChange={this.dateChanged}/>
                            </Picker>
                        </div>
                        <div  style={{wordBreak: 'break-all'}}>
                            <FilterButton onClick={this.handleClick}>Clear Filters</FilterButton>
                        </div>
                    </DivLevel>
                </div>

                <div className="container">
                    {this.state.data.length == 0
                        ?   <DivLevel> <h2>Sorry, no hikes. You can organize your own hike!</h2> </DivLevel>
                        :   <Grid>
                             {this.state.data.map((event, i) => <Cell size={4}><EventCard key={i} event={event}/></Cell>)}
                            </Grid>
                    }
                </div>
            </Page>
        );
    }
}

export default EventListView;