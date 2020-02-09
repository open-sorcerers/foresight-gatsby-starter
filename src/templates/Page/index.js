import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@components/Container'
import { Site } from '@components/Site'
import { breakpointAware } from '@hoc/breakpointAware'

const CC = breakpointAware(Container)

const Page = ({ children, ...other }) => {
  const props = { ...other }
  return (
    <Site {...props}>
      <CC>{children}</CC>
    </Site>
  )
}
Page.propTypes = {
  children: PropTypes.node
}
export default Page
