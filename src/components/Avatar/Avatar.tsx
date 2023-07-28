import React, { useState } from 'react'
import { styled } from 'styled-components'

interface AvatarProps {
  image_size?: number
  imageURL: string
}

export default function Avatar(props: AvatarProps) {
  const { image_size, imageURL } = props

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRotate = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }
  return (
    <AvatarContainer onClick={handleRotate} image_size={image_size || 32}>
      <div className={isLoading ? 'avatar-container hidden' : 'avatar-container'}>
        <div className='inner-avatar-container'>
          <img className='avatar' src={imageURL} alt='avatar-friend' />
        </div>
        {isLoading && <div className='dashed-loading'></div>}
      </div>
    </AvatarContainer>
  )
}

const AvatarContainer = styled.div<{ image_size: number }>`
  .avatar-container {
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(to right top, yellow, red, purple);
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    cursor: pointer;

    width: ${(props) => props.image_size + 5}px;
    height: ${(props) => props.image_size + 5}px;

    .inner-avatar-container {
      width: ${(props) => props.image_size}px;
      height: ${(props) => props.image_size}px;
      overflow: hidden;
      border-radius: 50%;

      padding: 2px;

      background-color: white;

      display: flex;
      align-items: center;
      justify-content: center;
      .avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    .dashed-loading {
      top: 0;
      left: 0;

      /* transform: translate(-50%, -50%); */

      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${(props) => (props.image_size ? props.image_size + 4 : 32 + 4)}px;
    }

    .dashed-loading:after,
    .dashed-loading:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      border-radius: 50%;

      height: ${(props) => (props.image_size ? props.image_size + 4 : 32 + 4)}px;
      width: ${(props) => (props.image_size ? props.image_size + 4 : 32 + 4)}px;
    }

    .dashed-loading:before {
      z-index: 5;
      border: 2px dashed #ff6bcb;
      border-left: 2px solid transparent;
      border-bottom: 2px solid transparent;
      /* -webkit-animation: dashed 1s linear infinite; */
      animation: dashed 2s linear infinite;
    }

    .dashed-loading:after {
      z-index: 10;
      border: 2px solid #ffb86c;
      border-left: 2px solid transparent;
      border-bottom: 2px solid transparent;
      /* -webkit-animation: dashed 1s ease infinite; */
      animation: dashed 2s ease infinite;
    }

    @keyframes dashed {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .avatar-container.hidden {
    background: none;
  }
`
