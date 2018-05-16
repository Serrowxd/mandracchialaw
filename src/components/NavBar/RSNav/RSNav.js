import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import { Link } from 'react-router-dom';

import './RSNav.css';

class RSNav extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Mandracchia Law</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AboutUs/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AttProf/">Attorney Profiles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AoP/">Areas of Practice</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/FAQ/">FAQ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default RSNav;
