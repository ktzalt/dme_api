import {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {lgSearchIcon} from '../Icons/Icons';

class Search extends Component {
  render(){
    return (
      lgSearchIcon
    );
  }

}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({

});

export default withStyles(styles)(Search);