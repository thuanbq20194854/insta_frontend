import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function Avatar2() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRotate = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }
  return (
    <Container onClick={handleRotate}>
      <div className='bg-insta-color'></div>
      <div className='bg-white'></div>

      <div className='image-container'>
        <img
          src='https://images.pexels.com/photos/15272226/pexels-photo-15272226/free-photo-of-black-and-white-photo-of-a-woman-walking-down-the-street-in-misty-weather.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
          className='image'
        />
      </div>

      {isLoading && <div className='dashed-loading'></div>}
    </Container>
  )
}

const Container = styled.div`
  border-radius: 50%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 66px;
  height: 66px;

  position: relative;

  cursor: pointer;

  background: linear-gradient(to right top, yellow, red, purple);

  /* overflow: hidden; */

  &:hover {
    background: transparent;
  }

  .bg-white {
    width: 56px;
    height: 56px;

    padding: 2px;

    background-color: white;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 2;
  }

  .image-container {
    width: 56px;
    height: 56px;

    border-radius: 50%;

    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 3;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .dashed-loading {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background-color: transparent;
    /* border: 1px solid black; */

    height: 62px;
    width: 62px;

    &:hover {
      border: dashed 2px pink;
      border-radius: 50%;
    }

    @keyframes dashed {
      to {
        transform: rotate(360deg);
      }
    }
  }
`
