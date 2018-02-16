import React from 'react';
import Login from './Login';
import { connect } from 'react-redux'
import {addUser} from '../../actions/index'

class LoginContainer extends React.Component {
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
        this.props.addUser(user);
        this.setState({
            user,
        });
    }

    handleRedirect(event) {
        const user = this.state.user;
        user.redirect_uri = event.target.value;
        this.props.addUser(user);
        this.setState({
            user,
        });
    }

    render() {
        console.log(this.props);

        return (
            <Login handleClientID={this.handleClientID} handleRedirect={this.handleRedirect} user={this.state.user} />
        );
    }
}

const mapStateToProps = state => {
    return {
      user : state.user
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (user) => {
        dispatch(addUser(user))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)