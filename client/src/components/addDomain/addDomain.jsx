import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconDns from 'material-ui/svg-icons/action/dns';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const primaryBlue = 'RGB(0,188,212)';
const styles = () => ({
  lgIcon: {
    color: primaryBlue,
    height: 100,
  }
});

const addDomainIcon =       
<MuiThemeProvider>
  <IconDns 
    style={{
      color: primaryBlue, 
      transform: 'scale(6)',
      marginTop: 125
    }} 
  />
</MuiThemeProvider>

class addDomain extends Component {
  render(){
    return (
      addDomainIcon
    );
  }

}

addDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addDomain);