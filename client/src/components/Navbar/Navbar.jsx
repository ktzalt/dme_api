import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from 'material-ui/Paper';
import {addDomainIcon, deleteDomainIcon, searchIcon, addRecordIcon, digIcon} from '../Icons/Icons' 


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