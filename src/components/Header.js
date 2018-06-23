"use strict";
import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { withRouter} from 'react-router-dom';
import {SimpleLink} from "./SimpleLink";
import UserService from "../services/UserService";

const DivHeader = styled.div`

    background-color: #f8f8f8;
    border-color: #e7e7e7;
    border-radius: 4px;
    min-height: 2em;
`;

const NavBar =styled.nav`
    position: relative;
    margin-bottom: 2em;
    border: 1px solid transparent;    
`;

const WebSiteName = styled.ul `
    float: left;
    height: auto;
    font-size: 18px;
    line-height: 20px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    &:hover{
      outline: 0;
      };
    box-sizing: border-box;
`;

const ItemsUl = styled.ul`
    float: left;
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
`;

const ItemList = styled.li`
    float: left;
    position: relative;
    display: block;
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    margin-top: 4px;
    border-right: #dbd7d7 solid 1px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    touch-action: manipulation;
    cursor: pointer;
    text-decoration:none;
    user-select: none;
    &:hover {
        background-color:#fff; 
    } 
`;

const SearchBarForm = styled.form`
    float: left!important;
    width: auto;
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 100px;
    border: 0;
    padding: 10px 15px;
    margin-top: 0px;
    box-sizing: border-box;
`;

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
                    <NavItem eventKey={3} onClick={() => this.props.history.push('/reviews')}>
                        Reviews
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