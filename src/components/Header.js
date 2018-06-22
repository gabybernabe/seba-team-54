import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { withRouter} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";

class Header extends React.Component {
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <SimpleLink to={`/`}>Hikup</SimpleLink>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1}>
                        <SimpleLink to={`/`}>Participate</SimpleLink>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <SimpleLink to={`/organize`}>Organize</SimpleLink>
                    </NavItem>
                    <NavItem eventKey={3}>
                        <SimpleLink to={`/reviews`}>Reviews</SimpleLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default withRouter(Header);