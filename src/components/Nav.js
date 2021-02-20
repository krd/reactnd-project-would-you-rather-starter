import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Nav () {
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
            <NavLink to='/login' activeClassName='active'>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }