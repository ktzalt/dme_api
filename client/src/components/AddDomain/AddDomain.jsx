import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgAddDomainIcon} from '../Icons/Icons';
import DomainForm from '../Forms/DomainForm';


const styles = () => ({
  title: {
    marginTop: 50,
  }
});

class AddDomain extends Component {

  render(){
    return (
      <div>
        {lgAddDomainIcon}
        <DomainForm 
          placeholder={'Enter the Domain Name'}
        />
      </div>
    );
  }

}

AddDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDomain);