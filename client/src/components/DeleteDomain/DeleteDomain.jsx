import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgDeleteDomainIcon} from '../Icons/Icons';
import DomainForm from '../Forms/DomainForm'


class DeleteDomain extends Component {

  deleteDomain = (domain) => {
    console.log("I'm from a prop");
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