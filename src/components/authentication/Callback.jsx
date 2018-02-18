import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

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

class Callback extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Monzo Dashboard</h1>
                    <h3>Authorisation Successful</h3>
                    <div>
                        {this.props.user.data.loaded &&
                            <Button variant="raised" color="primary" className={classes.button} onClick={this.props.handleProceed}>
                                Proceed
                            </Button>
                        }
                    </div>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Callback);