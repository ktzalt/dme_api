import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgAddDomainIcon} from '../Icons/Icons';
import DomainForm from '../Forms/DomainForm';

class AddDomain extends Component {

  addDomain = (domain, mxType) => {
    console.log("I'm from a prop");
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