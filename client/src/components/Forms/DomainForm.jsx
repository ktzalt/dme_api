import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import isURL from 'validator/lib/isURL';
import MxSwitches from './MxSwitches';

class DomainForm extends Component {
  state = {
    domain: '',
    domainFieldErrors: false,
    mxType: ''
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const domain = this.state.domain;
    const mxType = this.state.mxType;
    const domainFieldErrors = this.state.domainFieldErrors;
    if (domainFieldErrors || domain === '') return;

    if (this.props.type === 'add') {
      console.log(domain, mxType);
      this.props.submitMethod(domain, mxType);
    }
    if (this.props.type === 'delete') {
      this.props.submitMethod(domain);
    }
  }

  handleChange = name => evt => {
    if (name === 'domain') {
      this.setState({ domain: evt.target.value }, () => {
        if (this.state.domain === '') {
          this.setState({ domainFieldErrors: false });
        }
      });
      this.setState({ domainFieldErrors: !this.validateURL(evt.target.value) });
    }
    if (name === 'mxType') {
      this.setState({ mxType: evt.target.value });
    }

  }

  validateURL = domain => {
    if (isURL(domain)) {
      return true;
    } else return false;
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <TextField
          label={this.props.textFieldName}
          name={this.props.textFieldName}
          className={this.props.classes.textField}
          value={this.state.domain}
          onChange={this.handleChange('domain')}
          fullWidth={true}
          error={this.state.domainFieldErrors} />

        <br/>

        {this.props.mxVisibility && <MxSwitches handleChange={this.handleChange}/>}

        <Button
          variant='outlined'
          color='primary'
          type='submit'
          className={this.props.classes.button}>
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
  },
  selectorForm: {
    marginTop: 10,
  }
});

DomainForm.propTypes = {
  classes: PropTypes.object.isRequired,
  textFieldName: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  mxVisibility: PropTypes.bool.isRequired,
};

export default withStyles(styles)(DomainForm);
