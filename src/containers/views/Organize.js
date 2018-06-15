import React, { Component} from 'react';
import { Card, Button, FontIcon, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'

import Page from '../components/Page'

const style = { maxWidth: 500 };

class Organize extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Submit handled')
        event.preventDefault();
    }

    render() {
        return (
            <Page>
             <h1>Organize your hike</h1>
           		<Card style={style} className="md-block-centered">
                <form onSubmit={this.handleSubmit}>
                    <h2>Basic info</h2>
                    <label>
                        Hike name:
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label><br></br>
                    <label>
                        Departure location:
                        <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label><br></br>
                    <label>
                        Start:
                        <input type="text" value={this.state.start} onChange={this.handleChange} />
                    </label><br></br>
                    <label>
                        End:
                        <input type="text" value={this.state.end} onChange={this.handleChange} />
                    </label><br></br>

                    <h2>Details</h2>
                    <label>
                        Description:
                        <input type="text" value={this.state.description} onChange={this.handleChange} />
                    </label><br></br>
                    <label>
                        Trail:
                        <input type="text" value={this.state.trail} onChange={this.handleChange} />
                    </label>
                    <br></br>

                    <h2>Options</h2>
                    <label>
                        Capacity:
                        <input type="text" value={this.state.capacity} onChange={this.handleChange} />
                    </label><br></br>
                    <label>
                        Transport:
                        <select value={this.state.transport} onChange={this.handleChange}>
                            <option value="train">Train</option>
                            <option value="bus">Bus</option>
                            <option value="car">Car</option>
                            <option value="own transport">Own transport</option>
                        </select>
                    </label>
                    <br></br>

                    <input type="submit" value="Submit" />
                </form>
                </Card>
            </Page>
        );

    }
}

export default Organize