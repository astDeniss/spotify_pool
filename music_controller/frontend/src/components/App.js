import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <HomePage />
        </div>
        ); // we are here rendering directly imported componnents
    }
}

const appDiv = document.getElementById('app');
render(<App name='Dennis'/>, appDiv);   // name here is a prom, we can pass as many of those as we want 