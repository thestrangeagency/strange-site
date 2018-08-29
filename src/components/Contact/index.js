/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({title, email, description}) => {
  return (
    <div className='box'>
      <p className='contact-title'>{title}</p>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p>{description}</p>
    </div>
  )
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Contact
