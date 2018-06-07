import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgAddDomainIcon} from '../Icons/Icons';
import DomainForm from '../Forms/DomainForm';
import axios from 'axios';

class AddDomain extends Component {

  addDomain = (domain, mxType) => {
    axios.post('/api/domain', {
      domain: domain,
      mx_type: mxType
    })
    .then(res => {
      console.log(res);
    })
  }

  render(){
    return (
      <div>
        {lgAddDomainIcon}
        <DomainForm
          type='add'
          textFieldName='Domain' 
          buttonName='Add Domain'
          mxVisibility={true}
          submitMethod={this.addDomain}
        />
      </div>
    );
  }

}

const styles = () => ({

});

AddDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDomain);