import React from 'react';
import Login from './Login';
import APIConfig from '../../config/api.config.json';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        const user = {
            clientID: APIConfig.monzo.client_id,
            redirect_uri: APIConfig.monzo.redirect_uri,
        };

        this.state = {
            user,
        }
    }

    render() {
        return (
            <Login handleClientID={this.handleClientID} handleRedirect={this.handleRedirect} user={this.state.user} />
        );
    }
}
export default LoginContainer