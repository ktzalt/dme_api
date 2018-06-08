import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgDeleteDomainIcon} from '../Icons/Icons';
import DomainForm from '../Forms/DomainForm';
import axios from 'axios';


class DeleteDomain extends Component {

  deleteDomain = (domain) => {
    axios.delete('/api/domain', {
      params: { domain: domain }
    })
    .then(res => {
      console.log(res);
    })
  }

  render(){
    return (
      <div>
        {lgDeleteDomainIcon}
        <DomainForm
          type='delete'
          textFieldName='Domain'  
          buttonName='Delete Domain'
          mxVisibility={false}
          submitMethod={this.deleteDomain}
        />
      </div>
    );
  }

}

const styles = () => ({

});

DeleteDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteDomain);