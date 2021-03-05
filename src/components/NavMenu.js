import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink, withRouter, Router, Link } from 'react-router-dom';

function NavMenu(props) {
  console.log('navmenu props: ', props.user);
  const { name, avatarURL } = props.user;
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-light fixed-top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand as={Link} className="navbar-brand js-scroll-trigger" to="/">
        Would You Rather?
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem eventkey={1} href="/dashboard">
            <Nav.Link
              as={Link}
              className="nav-link js-scroll-trigger"
              to="/dashboard"
            >
              Dashboard
            </Nav.Link>
          </NavItem>
          <NavItem href="/new">
            <Nav.Link
              as={Link}
              className="nav-link js-scroll-trigger"
              to="/new"
            >
              New Question
            </Nav.Link>
          </NavItem>

          <NavItem href="/leaderboard">
            <Nav.Link
              as={Link}
              className="nav-link js-scroll-trigger"
              to="/leaderboard"
            >
              Leader Board
            </Nav.Link>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            {/* <NavItem href="/">
              <Nav.Link as={Link} className="nav-link js-scroll-trigger">
                <div className="circle-sm">
                  <img height="25px" src={avatarURL} />{' '}
                </div>
              </Nav.Link>
            </NavItem> */}
            <NavItem href="/">
            <Nav.Link as={Link} to="/" className="nav-link js-scroll-trigger">
              {name}
            </Nav.Link>
            </NavItem>
          </NavItem>
          <NavItem href="/">
            <Nav.Link as={Link} to="/" onClick={() => logout(props)}>
              Logout
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function logout(props) {
  const { dispatch } = props;
  dispatch(setAuthedUser(undefined));
}

function mapStateToProps({ users }) {
  const registeredUsers = Object.values(users);
  return { registeredUsers };
}

export default withRouter(connect(mapStateToProps)(NavMenu));
