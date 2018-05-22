import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgAddDomainIcon} from '../Icons/Icons';
import DomainForm from '../Forms/DomainForm';

class AddDomain extends Component {

  render(){
    return (
      <div>
        {lgAddDomainIcon}
        <DomainForm
          textFieldLabel='Domain' 
          buttonName='Add Domain'
        />
      </div>
    );
  }

}

const styles = () => ({
  title: {
    marginTop: 50,
  }
});

AddDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDomain);