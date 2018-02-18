import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CallbackContainer from './authentication/CallbackContainer';
import LoginContainer from './authentication/LoginContainer';
import Main from './main/Main';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={this.props.user.data.loaded ? Main : LoginContainer} />
                        <Route exact path='/Callback' component={CallbackContainer} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, [])(App)