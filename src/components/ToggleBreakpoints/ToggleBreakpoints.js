import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { Label, Checkbox } from '@rebass/forms'

export const ToggleBreakpoints = ({ breakpointsActive, toggleBreakpoints }) => (
  <Box id="toggle-breakpoints">
    <Label>
      <Checkbox checked={breakpointsActive} onClick={toggleBreakpoints} />
      Toggle Breakpoints
    </Label>
  </Box>
)

ToggleBreakpoints.propTypes = {
  breakpointsActive: PropTypes.bool,
  toggleBreakpoints: PropTypes.func
}

export default ToggleBreakpoints
