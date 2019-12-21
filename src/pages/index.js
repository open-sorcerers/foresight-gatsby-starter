import React from 'react'

import { Site } from '@components/Site'
import { Container } from '@components/Container'

import Readme from '@root/README.md'

const seo = {
  title: 'Home'
}

const IndexPage = ({ ...other }) => {
  return (
    <Site seo={seo} {...other}>
      <Container>
        <Readme />
      </Container>
    </Site>
  )
}

export default IndexPage
