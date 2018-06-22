"use strict";
import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { withRouter} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";
import UserService from "../services/UserService";


class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    logout() {
        UserService.logout();
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        if(this.props.location.pathname != '/') {
            this.props.history.push('/');
        }
        else {
            window.location.reload();
        }
    }

    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <SimpleLink to={`/`}>Hikup</SimpleLink>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} onClick={() => this.props.history.push('/')}>
                        Participate
                    </NavItem>
                    <NavItem eventKey={2} onClick={() => this.props.history.push('/organize')}>
                        Organize
                    </NavItem>
                    <NavItem eventKey={3} onClick={() => this.props.history.push('/blog')}>
                        Blog
                    </NavItem>
                </Nav>
                <Nav pullRight>
                        {this.state.user
                            ?
                                [
                                <NavDropdown eventKey={4}  title={this.state.user.username} id="basic-nav-dropdown">
                                    <MenuItem onClick={() => this.logout()}>
                                        Logout
                                    </MenuItem>
                                </NavDropdown>
                                ]
                            :
                                <NavItem eventKey={4.2} onClick={() => this.props.history.push('/login')}>
                                    Login
                                </NavItem>
                        }
                </Nav>
            </Navbar>

        );
    }
}

export default withRouter(Header);