import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
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
    marginTop: 50,
  },
});

function AppGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={2} md={2} lg={2} />
        <Grid item xs={8} md={8} lg={8}>
          <Navbar />
        </Grid>
        <Grid item xs={2} md={2} lg={2} />
      </Grid>
      
      <Grid container spacing={40}>
        <Grid item xs={2} md={2} lg={2} />
        <Grid item xs={8} md={8} lg={8}>
          <Paper className={classes.paper} elevation={16}></Paper>
        </Grid>
        <Grid item xs={2} md={2} lg={2} />
      </Grid>
    </div>
  );
}

AppGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppGrid);