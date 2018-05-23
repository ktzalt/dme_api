import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgDeleteDomainIcon} from '../Icons/Icons';
import DomainForm from '../Forms/DomainForm'


const styles = () => ({

});



class DeleteDomain extends Component {
  render(){
    return (
      <div>
        {lgDeleteDomainIcon}
        <DomainForm
          textFieldName='Domain'  
          buttonName="Delete Domain"
        />
      </div>
    );
  }

}

DeleteDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteDomain);