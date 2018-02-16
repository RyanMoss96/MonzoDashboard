import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Callback from './authentication/Callback';
import LoginContainer from './authentication/LoginContainer';

const App = () => (
    <MuiThemeProvider>
        <Switch>
            <Route exact path='/' component={LoginContainer} />
            <Route exact path='/Callback' component={Callback} />
        </Switch>
    </MuiThemeProvider>
)

export default App;