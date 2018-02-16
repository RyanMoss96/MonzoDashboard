import React from 'react';
import qs from 'query-string';
import 'whatwg-fetch';

export default class Callback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: null,
            accessData: null,
        };

        this.getAuthorisation = this.getAuthorisation.bind(this);
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
            client_id: "",
            client_secret: "",
            redirect_uri: "",
            code: authCode
        };

        var formBody = [];
        for (var property in auth) {
            var encodedKey = encodeURIComponent(property)
            var encodedValue = encodeURIComponent(auth[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        return fetch('https://api.monzo.com/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
            .then(response => response.json())
            .then(data => this.setState({ accessData: data }));
    }

    render() {
        return (
            <p>HELLO</p>
        );
    }
}