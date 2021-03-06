import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import IconDNS from 'material-ui/svg-icons/action/dns';
import IconBuild from 'material-ui/svg-icons/action/build';
import IconFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

// Styles and variables
const primaryBlue = 'RGB(0,188,212)';
const lgIconStyle = {
  color: primaryBlue, 
  transform: 'scale(4.5)',
  marginTop: 40
};
const smIconStyle = {
  color: 'inherit', 
  transform: 'scale(1.6)',
  marginTop: 7,
};
const titleStyle = {
  marginTop: 50,
}


// Icons
export const lgAddDomainIcon = 
  <MuiThemeProvider>
    <div>
      <h1 style={titleStyle}>ADD DOMAIN</h1>
      <IconDNS style={lgIconStyle} />
    </div>
  </MuiThemeProvider>
;


export const lgDeleteDomainIcon =
  <MuiThemeProvider>
    <div>
      <h1 style={titleStyle}>DELETE DOMAIN</h1>
      <IconDeleteForever style={lgIconStyle} />
    </div>
  </MuiThemeProvider>
;

export const lgSearchIcon =
  <MuiThemeProvider>
    <div>
      <h1 style={titleStyle}>SEARCH DOMAINS</h1>
      <IconSearch style={lgIconStyle} />
    </div>
  </MuiThemeProvider>
;

export const lgAddRecordIcon =
  <MuiThemeProvider>
    <div>
      <h1 style={titleStyle}>RECORDS</h1>
      <IconBuild style={lgIconStyle} />
    </div>
  </MuiThemeProvider>
;

export const lgDigIcon =
  <MuiThemeProvider>
    <div>
      <h1 style={titleStyle}>DIG</h1>
      <IconFavoriteBorder style={lgIconStyle} />
    </div>
  </MuiThemeProvider>
;

// Simple, small icons
export const addDomainIcon = <IconDNS style={smIconStyle} />;
export const deleteDomainIcon = <IconDeleteForever style={smIconStyle}/>;
export const searchIcon = <IconSearch style={smIconStyle}/>;
export const addRecordIcon = <IconBuild style={smIconStyle}/>;
export const digIcon = <IconFavoriteBorder style={smIconStyle}/>