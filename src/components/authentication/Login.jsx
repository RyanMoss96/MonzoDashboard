import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        margin: '0 auto',
        width: '40%',
    }),
    button: {
        margin: theme.spacing.unit,
    },
});

class Login extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Monzo Dashboard</h1>
                    <div>
                        <Button variant="raised" color="primary" className={classes.button} href={`https://auth.monzo.com/?client_id=${this.props.user.clientID}&redirect_uri=${this.props.user.redirect_uri}&response_type=code`}>
                            Login
                        </Button>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Login);