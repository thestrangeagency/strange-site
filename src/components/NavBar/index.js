import React, {Component} from 'react'
import Link from 'gatsby-link'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
  }

  toggleMenu () {
    this.setState({open: !this.state.open})
  }

  hideMenu () {
    this.setState({open: false})
  }

  render () {
    return (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src='../../img/logo-header@2x.png' width='191' height='23' />
          </Link>
          <a role='button' className={this.state.open ? 'is-active navbar-burger' : 'navbar-burger'} onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </a>
        </div>
        <div className={this.state.open ? 'is-active navbar-menu' : 'navbar-menu'}>
          <div className='navbar-start'>
            <Link onClick={this.hideMenu} className='navbar-item is-uppercase' activeClassName='is-active' to='/about'>
              About
            </Link>
            <Link onClick={this.hideMenu} className='navbar-item is-uppercase' activeClassName='is-active' to='/services'>
              Services
            </Link>
            <Link onClick={this.hideMenu} className='navbar-item is-uppercase' activeClassName='is-active' to='/work'>
              Work
            </Link>
            {/*
            <Link onClick={this.hideMenu} className='navbar-item is-uppercase' activeClassName='is-active' to='/blog'>
              Blog
            </Link>
            */}
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link onClick={this.hideMenu}
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
}

export default NavBar
