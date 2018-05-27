import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, NavbarToggler, Collapse } from 'reactstrap';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let troubleshootLinkClass = this.state.collapsed ? 'troubleshootLinkOpen' : 'troubleshootLinkUnder';
    let pcbuildLinkClass = this.state.collapsed ? 'pcbuildLinkOpen' : 'pcbuildLinkUnder';
    let webdevLinkClass = this.state.collapsed ? 'webdevLinkOpen' : 'webdevLinkUnder';

    return (
      <div className="App">
        <Navbar color="light" light expand="sm">
          <NavbarBrand href="/" className="logo mr-auto">
            Logo
          </NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={troubleshootLinkClass}>
                <NavLink href="/">TroubleShoot</NavLink>
              </NavItem>
              <NavItem className={pcbuildLinkClass}>
                <NavLink href="/">Custom PC Builds</NavLink>
              </NavItem>
              <NavItem className={webdevLinkClass}>
                <NavLink href="/">Web Development</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div className="maincontent">
          <div className="middlecontent">
            <p className="text">
              Increase your PC longevity through the power of upgrades (including free troubleshooting)
            </p>

            <Nav className="quote">
              <NavItem>
                <NavLink>Free Quote</NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="middlecontent">
            <p className="text">Custom PC builds tailored to your needs</p>
            <Nav className="quote">
              <NavItem>
                <NavLink>Free Quote</NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="middlecontent">
            <p className="text">Full-Stack Web Application Development using the latest tech stack</p>
            <Nav className="quote">
              <NavItem>
                <NavLink>Free Quote</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
