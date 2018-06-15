"use strict";

import React from 'react';

import Header from './Header';

export default class Page extends React.Component {

    render() {
        return (
            <section>
                <Header/>
                {this.props.children}
            </section>
        );
    }
}