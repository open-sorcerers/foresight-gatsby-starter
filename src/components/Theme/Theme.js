import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

import { Breakpoints } from '@styles/media'
import { injectChildren } from '@utils/react'

import { BaseCSS } from './BaseCSS'
import { system } from './system'

const Theme = ({ children }) => {
  const [breakpointsActive, setBreakpointsActive] = useState(false)
  const toggleBreakpoints = () => setBreakpointsActive(!breakpointsActive)
  const kids = injectChildren({ breakpointsActive, toggleBreakpoints }, children)
  return (
    <ThemeProvider theme={system}>
      <>
        {breakpointsActive ? <Breakpoints /> : null}
        <BaseCSS />
        {kids}
      </>
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export { Theme }
