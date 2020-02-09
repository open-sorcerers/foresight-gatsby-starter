import React from 'react'
import { curry } from 'ramda'
import { injectChildren } from '@utils/react'

export const breakpointAware = curry((El, { children, breakpointsActive, toggleBreakpoints }) => (
  <El>{injectChildren({ breakpointsActive, toggleBreakpoints }, children)}</El>
))
