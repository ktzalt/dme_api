import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


function MxSwitches (props) {
  return (
    <FormGroup row >
      <FormControlLabel
        control={
          <Switch
            onChange={props.handleChange('mxType')}
            value='gmail'
          />
        }
        label='Google'
      />
      <FormControlLabel
        control={
          <Switch
            onChange={props.handleChange('mxType')}
            value='godaddy'
          />
        }
        label='GoDaddy'
      />
      <FormControlLabel
        control={
          <Switch
            onChange={props.handleChange('mxType')}
            value='networksolutions'
          />
        } label='NetSol' />
    </FormGroup>
  );
}





MxSwitches.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default MxSwitches;
