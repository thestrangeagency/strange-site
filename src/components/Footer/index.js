/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='columns'>

        <div class='column'>
          <h1 class='title'>
            The Strange Agency, LLC
          </h1>

          <div class='pb-1'>
            <p>Apps for iOS</p>
            <span class='icon'>
              <i class='fas fa-tablet-alt' />
            </span>
            <a href='http://strange.software'>strange.software</a>
          </div>

          <div class='pb-1'>
            <p>Mobile Development Consulting</p>
            <span class='icon'>
              <i class='fas fa-briefcase' />
            </span>
            <a href='http://the.strange.agency'>the.strange.agency</a>
          </div>

        </div>

        <div class='column'>
          <h1 class='title'>
            Stay connected
          </h1>
          <div>
            <div>
              <span class='icon'>
                <i class='fab fa-facebook-square' />
              </span>
              <a href='http://facebook.com/thestrangeagency'>facebook.com/thestrangeagency</a>
            </div>
            <div>
              <span class='icon'>
                <i class='fab fa-twitter-square' />
              </span>
              <a href='http://twitter.com/strangeagency'>twitter.com/strangeagency</a>
            </div>
            <div>
              <span class='icon'>
                <i class='fab fa-vimeo-square' />
              </span>
              <a href='http://vimeo.com/tsa'>vimeo.com/tsa</a>
            </div>
          </div>
        </div>

        <div class='column'>
          <h1 class='title'>
          </h1>
        </div>

      </div>
    </footer>
  )
}

export default Footer
