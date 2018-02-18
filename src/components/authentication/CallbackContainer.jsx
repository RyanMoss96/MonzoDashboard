import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import qs from 'query-string';
import 'whatwg-fetch';
import Callback from './Callback';
import MonzoAPI from '../../services/MonzoAPI';
import { addUser } from '../../actions/index'
import APIConfig from '../../config/api.config.json';


class CallbackContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: null,
        };

        this.getAuthorisation = this.getAuthorisation.bind(this);
        this.handleAuthResponse = this.handleAuthResponse.bind(this);
        this.handleProceed = this.handleProceed.bind(this);
    }

    componentDidMount() {
        let code = qs.parse(this.props.location.search).code;

        if (code !== undefined) {
            this.setState({
                code,
            });

            this.getAuthorisation(code);
        }
    }

    getAuthorisation(authCode) {
        let auth = {
            grant_type: "authorization_code",
            client_id: APIConfig.monzo.client_id,
            client_secret: APIConfig.monzo.client_secret,
            redirect_uri: APIConfig.monzo.redirect_uri,
            code: authCode
        };

        var formBody = [];
        for (var property in auth) {
            var encodedKey = encodeURIComponent(property)
            var encodedValue = encodeURIComponent(auth[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        MonzoAPI.getAuthorisationToken(formBody)
            .then(data => this.handleAuthResponse(data));
    }

    handleAuthResponse(user) {
        let data = {
            user,
            loaded: true,
        }

        this.props.addUser(data);
    }

    handleProceed() {
        this.props.history.push('/');
    }

    render() {
        return (
            <Callback user={this.props.user} handleProceed={this.handleProceed}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(addUser(user))
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CallbackContainer))