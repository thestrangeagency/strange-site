/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img src='../../img/logo-header@2x.png' width='191' height='23' />
        </Link>
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-start'>
          <Link className='navbar-item is-uppercase' activeClassName='is-active' to='/pricing'>
            Pricing
          </Link>
          <Link className='navbar-item is-uppercase' activeClassName='is-active' to='/about'>
            About
          </Link>
          <Link className='navbar-item is-uppercase' activeClassName='is-active' to='/services'>
            Services
          </Link>
          <Link className='navbar-item is-uppercase' activeClassName='is-active' to='/work'>
            Work
          </Link>
          <Link className='navbar-item is-uppercase' activeClassName='is-active' to='/blog'>
            Blog
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>
                <Link
                  className='button is-primary is-outlined'
                  to='/contact'>
                    Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
