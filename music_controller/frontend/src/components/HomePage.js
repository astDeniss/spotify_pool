import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    Redirect 
} from 'react-router-dom';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path='/'><p>This is the Home Page</p></Route>  // exact key word tells it has to be exactly that url (not just a pattern)
                <Route exact path='/join' component={RoomJoinPage} />
                <Route exact path='/create' component={CreateRoomPage} />  // here we set the routing telling React which component to render based on the url
            </Switch>
        </Router>;
    }
}