import {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgAddRecordIcon} from '../Icons/Icons';


const styles = () => ({

});



class Records extends Component {
  render(){
    return (
      lgAddRecordIcon
    );
  }

}

Records.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Records);