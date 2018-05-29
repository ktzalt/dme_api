import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import isURL from 'validator/lib/isURL';

class DomainForm extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    validate: PropTypes.func,
  };

  state = {
    domain:'',
    domainErrors: false,
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const domain = this.state.domain;
    if (this.validate(domain)) {
      console.log("Button pressed");
    } else {
      console.log('ERROR');
      this.setState({domainErrors: true});
      return;
    }
  };

  handleChange = evt => {
    this.setState({domainErrors: false});
    this.setState({domain: evt.target.value});
  }

  validate = domain => {
    if(isURL(domain)) {
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
          onChange={this.handleChange}
          fullWidth={true}
          error={this.state.domainErrors}
        />
        <br/>
        <FormGroup row className={this.props.classes.selectorForm}>
          <FormControlLabel
            control={
              <Switch
                // checked={this.state.checkedA}
                // onChange={this.handleChange('checkedA')}
                value="Google"
              />
            }
            label="Google"
          />
          <FormControlLabel
            control={
              <Switch
                // checked={this.state.checkedB}
                // onChange={this.handleChange('checkedB')}
                value="GoDaddy"
              />
            }
            label="GoDaddy"
          />
          <FormControlLabel 
          control={
            <Switch value="NetworkSolutions" 
            />
          } label="NetSol" />
        </FormGroup>
        <Button 
          variant="outlined" 
          color="primary"
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

export default withStyles(styles)(DomainForm);