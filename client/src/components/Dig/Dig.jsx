import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgDigIcon} from '../Icons/Icons';


const styles = () => ({

});



class Dig extends Component {
  render(){
    return (
      <div>
        {lgDigIcon}
      </div>
    );
  }

}

Dig.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dig);