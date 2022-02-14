import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import Matchlist from './components/MatchList';
import Match from './components/Match';
import {Redirect} from 'react-router-dom'

const App = (props) => {

    return (
        <div>
            <Router>
            <Route exact path="/" render={() => (
                <Redirect to="/match"/>
            )}/>
                <Switch>
                    <Route exact path="/matches" component={Matchlist}/>
                    <Route exact path="/match" component={Match}/>
                </Switch>
            </Router>
        </div>
    )
}
export default App;
