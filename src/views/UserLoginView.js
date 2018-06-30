"use strict";

import React from 'react';

import UserLogin from '../components/UserLogin';

import UserService from '../services/UserService';

import { Button, SVGIcon, DialogContainer } from 'react-md';
import {NavItem} from "react-bootstrap";

class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state = { visible : false };
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }

    login(user) {
        UserService.login(user.username, user.password).then((data) => {
            this.state.error ? console.error(this.state.error) :  this.props.history.goBack();
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });

    }

    show () { this.setState({visible:true})};
    hide () { this.setState({visible:false})};

    render() {
        const {visible} = this.state
        const actions = [{
            onClick: this.hide,
            primary: true,
            children: 'Cancel',
        }];

        return (

            <div>
                <NavItem onClick={this.show}>
                Login
                </NavItem>
                <DialogContainer
                    visible={visible}
                    id="loginDialog"
                    onHide={this.hide}
                    modal
                    actions = {actions}
                    >
                    <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}/>
                </DialogContainer>
            </div>

        );
    }
}

export default UserLoginView;