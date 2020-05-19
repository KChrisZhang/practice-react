import React from 'react'

const FiliterLink = ''

const Footer = () => (
  <p>
    show: <FiliterLink filter="SHOW_ALL">All</FiliterLink>
    {', '}
    <FiliterLink filter="SHOW_ACTIVE">Active</FiliterLink>
    {', '}
    <FiliterLink filter="SHOW_COMPLETED">Completed</FiliterLink>
  </p>
)

export default Footer
