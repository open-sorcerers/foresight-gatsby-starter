import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { Breakpoints } from '@styles/media'

import { BaseCSS } from './BaseCSS'
import { system } from './system'

const Theme = ({ children }) => (
  <ThemeProvider theme={system}>
    <>
      <Breakpoints />
      <BaseCSS />
      {children}
    </>
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export { Theme }
