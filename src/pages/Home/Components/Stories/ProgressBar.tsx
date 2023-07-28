import React from 'react'
import { styled } from 'styled-components'

export default function ProgressBar() {
  return (
    <Container>
      <div className='bar-per'></div>
    </Container>
  )
}

const Container = styled.div`
  height: 2px;
  width: 100%;

  background-color: rgba(38, 38, 38, 0.8);
  border-radius: 6px;

  .bar-per {
    height: 100%;
    width: 50%;

    border-radius: 6px;
    background-color: #ffffff;
  }
`
