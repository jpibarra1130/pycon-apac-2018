import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
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
} from 'reactstrap'

import bg1Jpg from '../images/bg1.jpg'
import pyconApacLogoSvg from '../images/pycon-apac-logo.svg'

const NavBg = styled.nav`
  background-image: url(${bg1Jpg});
`

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <NavBg>
        <div className="container">
          <Navbar color="faded" dark expand="md">
            <Link to="/" className="nav-link" style={{ color: 'white' }}>
              <img
                src={pyconApacLogoSvg}
                alt="PyCon APAC 2018"
                style={{ width: '200px' }}
              />
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/news/" className="nav-link">
                    News
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/sponsors/" className="nav-link">
                    Sponsors
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/venue/" className="nav-link">
                    Venue
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    Event
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="div">
                      <Link to="/schedule/">Conference Schedule</Link>
                    </DropdownItem>
                    <DropdownItem tag="div">
                      <Link to="/workshops/">Workshops at PyCon APAC 2018</Link>
                    </DropdownItem>
                    <DropdownItem tag="div">
                      <Link to="/edu-summit/">Education Summit</Link>
                    </DropdownItem>
                    <DropdownItem tag="div">
                      <Link to="/young-coders/">
                        Young Coders&rsquo; Workshops
                      </Link>
                    </DropdownItem>
                    <DropdownItem tag="div">
                      <Link to="/code-of-conduct/">Code of Conduct</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    Archive
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="div">
                      <a href="/archive/2016/index.html">2016</a>
                    </DropdownItem>
                    <DropdownItem tag="div">
                      <a href="/archive/2015/index.html">2015</a>
                    </DropdownItem>
                    <DropdownItem tag="div">
                      <a href="/archive/2014/index.html">2014</a>
                    </DropdownItem>
                    <DropdownItem tag="div">
                      <a href="/archive/2013/index.html">2013</a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </NavBg>
    )
  }
}

export default Header
