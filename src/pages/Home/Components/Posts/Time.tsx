import React from 'react'
import { styled } from 'styled-components'

export default function Time() {
  return (
    <Container>
      <time>1 HOUR AGO</time>
    </Container>
  )
}

const Container = styled.div`
  font-size: 10px;
  color: #737373;
`
