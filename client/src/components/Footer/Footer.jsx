import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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


class Footer extends Component {
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
              label="Add Domain"
              icon={addDomainIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Delete Domain"
              icon={deleteDomainIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Search"
              icon={searchIcon}
              onClick={() => this.select(2)}
            />
            <BottomNavigationItem
              label="Add Record"
              icon={addRecordIcon}
              onClick={() => this.select(3)}
            />
            <BottomNavigationItem
              label="Dig"
              icon={digIcon}
              onClick={() => this.select(4)}
            />
          </BottomNavigation>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Footer;