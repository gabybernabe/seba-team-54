import React from 'react';

import { EventDetail } from '../components/EventDetail';

import EventService from '../services/EventService';

class Participate extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        EventService.getEvent(id).then((data) => {
            this.setState({
                event: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <EventDetail event={this.state.event}/>
        );
    }
}

export default Participate;