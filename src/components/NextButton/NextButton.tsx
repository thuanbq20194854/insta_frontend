import * as React from 'react'
import styled from 'styled-components'

export interface INextButtonProps {
  className?: string
}

export default function NextButton(props: INextButtonProps) {
  const { className } = props
  return (
    <Container className={className}>
      <div style={{ backgroundImage: `~\\public\\images\\bgIcon.png` }} className='next-icon'></div>
    </Container>
  )
}
// ${process.env.REACT_APP_URL}/images/loading.gif

const Container = styled.button`
  background: 0 0;
  outline: none;
  border: none;
  height: 45px;
  width: 45px;
  .next-icon {
    height: 45px;
    width: 45px;
    background-position: -244px -107px;
    background-repeat: no-repeat;
  }
`
