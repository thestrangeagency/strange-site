/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='columns'>

        <div className='column'>
          <h1 className='title'>
            The Strange Agency, LLC
          </h1>

          <div className='pb-1'>
            <p>Apps for iOS</p>
            <span className='icon'>
              <i className='fas fa-tablet-alt' />
            </span>
            <a href='http://strange.software'>strange.software</a>
          </div>

          <div className='pb-1'>
            <p>Mobile Development Consulting</p>
            <span className='icon'>
              <i className='fas fa-briefcase' />
            </span>
            <a href='http://the.strange.agency'>the.strange.agency</a>
          </div>

        </div>

        <div className='column'>
          <h1 className='title'>
            Stay connected
          </h1>
          <div>
            <div>
              <span className='icon'>
                <i className='fab fa-facebook-square' />
              </span>
              <a href='http://facebook.com/thestrangeagency'>facebook.com/thestrangeagency</a>
            </div>
            <div>
              <span className='icon'>
                <i className='fab fa-twitter-square' />
              </span>
              <a href='http://twitter.com/strangeagency'>twitter.com/strangeagency</a>
            </div>
            <div>
              <span className='icon'>
                <i className='fab fa-vimeo-square' />
              </span>
              <a href='http://vimeo.com/tsa'>vimeo.com/tsa</a>
            </div>
          </div>
        </div>

        <div className='column'>
          <h1 className='title'>
          </h1>
        </div>

      </div>
    </footer>
  )
}

export default Footer
