import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        margin: '0 auto',
        width: '40%',
    }),
});

class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Hello World</h1>
                    <div>
                        <TextField
                            onChange={this.props.handleClientID}
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={this.props.handleRedirect}
                        />
                    </div>
                    <a href={`https://auth.monzo.com/?client_id=${this.props.user.clientID}&redirect_uri=${this.props.user.redirect_uri}&response_type=code`} className="waves-effect waves-light btn">Login</a>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Login);