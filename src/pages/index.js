import React from 'react'

import { Site } from '@components/Site'
import { Container } from '@components/Container'
import { ToggleBreakpoints } from '@components/ToggleBreakpoints'
import { breakpointAware } from '@hoc/breakpointAware'

import Readme from '@root/README.md'

const seo = {
  title: 'Home'
}

const CC = breakpointAware(Container)

const IndexPage = ({ ...other }) => {
  return (
    <Site seo={seo} {...other}>
      <CC>
        <Readme />
        <ToggleBreakpoints />
      </CC>
    </Site>
  )
}

export default IndexPage
