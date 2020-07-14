import React from 'react'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import Landing from '../pages/Landing';

export function Routes({ }) {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </Router>
    );
}
