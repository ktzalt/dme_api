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

const addDomainIcon = <IconDNS />;
const deleteDomainIcon = <IconDeleteForever />;
const searchIcon = <IconSearch />;
const addRecordIcon = <IconBuild />;
const digIcon = <IconFavoriteBorder />

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
              label={
                <Link to='/' 
                      className={this.props.classes.link}
                >
                  Add Domain
                </Link>
              }
              icon={addDomainIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label={
                <Link to='/' 
                      className={this.props.classes.link}
                >
                  Delete Domain
                </Link>
              }
              icon={deleteDomainIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label={
                <Link to='/' 
                      className={this.props.classes.link}
                >
                  Search
                </Link>
              }
              icon={searchIcon}
              onClick={() => this.select(2)}
            />
            <BottomNavigationItem
              label={
                <Link to='/' 
                      className={this.props.classes.link}
                >
                  Add Record
                </Link>
              }
              icon={addRecordIcon}
              onClick={() => this.select(3)}
            />
            <BottomNavigationItem
              label={
                <Link to='/' 
                      className={this.props.classes.link}
                >
                  Dig
                </Link>
              }
              icon={digIcon}
              onClick={() => this.select(4)}
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