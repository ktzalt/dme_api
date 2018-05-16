import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const primaryBlue = 'RGB(0,188,212)';
const styles = () => ({
  lgIcon: {
    color: primaryBlue,
    height: 100,
  }
});

const deleteDomainIcon =       
<MuiThemeProvider>
  <IconDeleteForever 
    style={{
      color: primaryBlue, 
      transform: 'scale(6)',
      marginTop: 125
    }} 
  />
</MuiThemeProvider>

class deleteDomain extends Component {
  render(){
    return (
      deleteDomainIcon
    );
  }

}

deleteDomain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(deleteDomain);