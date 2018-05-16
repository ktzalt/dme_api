import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from 'material-ui/Paper';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import IconDNS from 'material-ui/svg-icons/action/dns';
import IconBuild from 'material-ui/svg-icons/action/build';
import IconFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const iconStyle = {
  color: 'inherit', 
  transform: 'scale(1.6)',
  marginTop: 7,
};

const addDomainIcon = <IconDNS style={iconStyle} />;
const deleteDomainIcon = <IconDeleteForever style={iconStyle}/>;
const searchIcon = <IconSearch style={iconStyle}/>;
const addRecordIcon = <IconBuild style={iconStyle}/>;
const digIcon = <IconFavoriteBorder style={iconStyle}/>

const styles = ({
  link: { 
    color: 'inherit',
    textDecoration: 'none',
  }
});


class Navbar extends Component {
  state = {
    selectedIndex: 0,
  };


  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <MuiThemeProvider>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem  
              icon={addDomainIcon}
              onClick={() => this.select(0)}
              containerElement={<Link to="/"/>}
            />
            <BottomNavigationItem
              icon={deleteDomainIcon}
              onClick={() => this.select(1)}
              containerElement={<Link to="/deleteDomain"/>}
            />
            <BottomNavigationItem
              icon={searchIcon}
              onClick={() => this.select(2)}
              containerElement={<Link to="/search"/>}
            />
            <BottomNavigationItem
              icon={addRecordIcon}
              onClick={() => this.select(3)}
              containerElement={<Link to="/addRecord"/>}
            />
            <BottomNavigationItem
              icon={digIcon}
              onClick={() => this.select(4)}
              containerElement={<Link to="/dig"/>}
            />
          </BottomNavigation>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navbar);