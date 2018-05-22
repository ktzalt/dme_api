import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import isURL from 'validator/lib/isURL';

class DomainForm extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    validate: PropTypes.func,
  };

  state = {
    domain:'',
    fieldErrors: {}
  }

  onFormSubmit = evt => {
    const domain = this.state.domain;
    const fieldErrors = this.validate(domain);
    this.setState({fieldErrors});
    evt.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    console.log("Button pressed");
  };

  onInputChange = evt => {
    const fields = Object.assign({}, this.state.domain);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  };

  validate = domain => {
    const errors = {};
    if (!domain) errors.domain = 'Domain Required';
    if(domain && !isURL(domain)) errors.domain = 'Invalid Domain';
    return errors;
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <TextField
          label={this.props.textFieldLabel}
          className={this.props.classes.textField}
          fullWidth={true}
        />
        <br/>
        <Button 
          variant="outlined" 
          color="primary" 
          className={this.props.classes.button}
        >
          {this.props.buttonName}
        </Button>
      </form>
    );
  }
}

const styles = () => ({
  textField: {
    marginTop: 100,
    color: 'RGB(0,188,212)'
  },
  button: {
    marginTop: 50,
    color: 'RGB(0,188,212)'
  }
});

export default withStyles(styles)(DomainForm);