import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router'
import {Provider} from 'react-redux';
import history from './history';

import App from '../App';
import LoginContainer from '../containers/LoginContainer';

const Root = props => {
    return (
        <Provider store={props.store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route exact path="/" component={LoginContainer} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    )
}

export default Root