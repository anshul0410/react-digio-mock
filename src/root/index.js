import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import history from './history';

import App from '../App';
import LoginContainer from '../containers/LoginContainer';
import DashboardContainer from '../containers/DashboardContainer';
import ErrorContainer from '../containers/ErrorContainer';

const Root = props => {
    return (
        <Provider store={props.store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route exact path="/" component={LoginContainer} />
                        <Route path="/dashboard" component={DashboardContainer} />
                        <Route path="*" component={ErrorContainer} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    )
}

export default Root