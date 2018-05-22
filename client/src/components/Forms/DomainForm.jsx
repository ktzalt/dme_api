import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class DomainForm extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  };


  render() {
    return (
      <div>
        <TextField
          label='Domain'
          className={this.props.classes.textField}
        />
        <br/>
        <Button 
          variant="outlined" 
          color="primary" 
          className={this.props.classes.button}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}

const styles = () => ({
  textField: {
    marginTop: 100,
    width: 400,
    color: 'RGB(0,188,212)'
  },
  button: {
    marginTop: 50,
    color: 'RGB(0,188,212)'
  }
});

export default withStyles(styles)(DomainForm);