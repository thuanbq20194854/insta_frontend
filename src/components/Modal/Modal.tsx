import React from 'react'
import ReactDOM from 'react-dom'
import { styled } from 'styled-components'
import CloseSvg from '../Icons/CloseSvg'

interface ModalProps {
  content: JSX.Element
  color?: string
  onCloseModal: () => void
  openModal: boolean
  setCloseOnClickModal?: boolean
}

export default function Modal(props: ModalProps) {
  const { content, color, onCloseModal, openModal, setCloseOnClickModal = true } = props

  if (!openModal) return null

  console.log('openModal: ', openModal)

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const doNothing = () => {}

  return ReactDOM.createPortal(
    <Container style={{ backgroundColor: color ? color : 'rgb(0 0 0 / 60%)' }}>
      <div className='modal' onClick={setCloseOnClickModal ? onCloseModal : doNothing} aria-hidden='true'></div>

      <div className='content'>{content}</div>
      <div className='close-btn' onClick={onCloseModal} aria-hidden='true'>
        <CloseSvg />
      </div>
    </Container>,
    document.getElementById('modal-wrapper') as HTMLElement
  )
}

const Container = styled.div`
  top: 0px;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 100;

  background-color: red;
  /* background-color: rgb(0 0 0 / 60%); */
  /* background-color: rgb(0 0 0 / 60%); */

  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    /* background-color: green; */
  }

  .content {
    position: fixed;
    /* background-color: red; */
    /* margin: auto; */

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .close-btn {
    /* z-index:  */
    position: absolute;
    right: 40px;
    top: 20px;

    cursor: pointer;
    /* background-color: black; */
    svg {
      width: 24px;
      height: 24px;
      fill: white;
      color: white;
    }
  }
`
