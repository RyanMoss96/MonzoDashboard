import React from 'react';
import Callback from './Callback';

export default class CallbackContainer extends React.Component {
    constructor() {
        super();

        console.log(this.props);
    }

    render() {
        return (
            <Callback />
        );
    }
}