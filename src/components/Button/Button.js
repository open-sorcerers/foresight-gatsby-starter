import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styled'

/* global alert */

const Button = ({ children, ...other }) => {
  return (
    <StyledButton {...other} onClick={() => alert('Woo, MDX!')}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}

Button.defaultProps = {}

export { Button }
