import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Navbar from '../Navbar/Navbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 600,
    margin: 100,
  },
});

function AppPaper(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Navbar />
      <Paper className={classes.paper}></Paper>
    </div>
  );
}

AppPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppPaper);