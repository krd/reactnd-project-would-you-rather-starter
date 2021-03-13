import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink, withRouter, Router, Link } from 'react-router-dom';

function NavMenu(props) {
  const { name, avatarURL } = props.user;
  document.body.style.id = "page-top";
  return (
    // <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" >
    //   <div class="container">
    //     <a class="navbar-brand js-scroll-trigger" href="/">
    //       Would You Rather?
    //     </a>
    //     <button
    //       class="navbar-toggler navbar-toggler-right"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarResponsive"
    //       aria-controls="navbarResponsive"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       Menu
    //       <i class="fas fa-bars"></i>
    //     </button>
    //     <div class="collapse navbar-collapse page-wrap" id="navbarResponsive">
    //       <ul class="navbar-nav ml-auto ">
    //       <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
    //         <li class="nav-item">
    //           <a class="nav-link js-scroll-trigger" href="/dashboard">
    //             Dashboard
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link js-scroll-trigger" href="/new">
    //             ADD
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link js-scroll-trigger" href="/leaderboard">
    //             Standings
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link js-scroll-trigger" href="/logout">
    //             Login
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link js-scroll-trigger" href="/tabs">
    //             Tabs
    //           </a>
    //         </li>
    //         <div class="line"></div>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

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
          <NavItem href="/tabs">
              <Nav.Link
              as={Link}
              className="nav-link js-scroll-trigger"
              to="/tabs"
            >
              Tabs
            </Nav.Link>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
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

function handleScroll(e) {
    let element = e.target
    alert('SCROLLING')
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      alert('DONE SCROLLING')
    }
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
