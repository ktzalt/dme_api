import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgDeleteDomainIcon} from '../Icons/Icons'


const styles = () => ({

});



class DeleteDomain extends Component {
  render(){
    return (
      lgDeleteDomainIcon
    );
  }

}

DeleteDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteDomain);