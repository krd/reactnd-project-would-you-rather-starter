import { NavLink } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

function Nav (props) {   
    const { name, avatarURL } = props.user
    return ( 
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <li>
          <img height="20px" src={avatarURL} /> { props.user === undefined ? '' : name }
          </li>
          <li>
          <a className="submit" align="center" onClick={() => logout(props)}>
            Logout
          </a>
          </li>
        </ul>
      </nav>
    )
  }  

  function logout(props) {
      const { dispatch } = props
      dispatch(setAuthedUser(undefined))
  }

  function mapStateToProps({ users }) {
    const registeredUsers = Object.values(users);
    return { registeredUsers };
  }
  
  export default connect(mapStateToProps)(Nav);

//   export default Nav;