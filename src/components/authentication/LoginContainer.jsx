import React from 'react';
import Login from './Login';

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        const user = {
            clientID: null,
            redirect_uri: null,
        };

        this.state = {
            user,
        }

        this.handleClientID = this.handleClientID.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleClientID(event) {
        const user = this.state.user;
        user.clientID = event.target.value;
        this.setState({
            user,
        });
    }

    handleRedirect(event) {
        const user = this.state.user;
        user.redirect_uri = event.target.value;
        this.setState({
            user,
        });
    }

    render() {
        return (
            <Login handleClientID={this.handleClientID} handleRedirect={this.handleRedirect} user={this.state.user} />
        );
    }

}