import { useState } from 'react'
import { styled } from 'styled-components'

const fakeImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/16577591/pexels-photo-16577591/free-photo-of-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/17260662/pexels-photo-17260662/free-photo-of-tattoos-on-man-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/802127/pexels-photo-802127.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

const returnTranslateXArray = (lengthOfArray: number, currentSlide: number) => {
  // eslint-disable-next-line prefer-const
  let returnedArray = Array(lengthOfArray)

  for (let i = 0; i < lengthOfArray; i++) {
    returnedArray[i] = i - currentSlide
  }

  return returnedArray
}

interface ImageListProps {
  height?: string
  width?: string
}

export default function ImageList(props: ImageListProps) {
  const { height, width } = props

  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const numberOfImage: number = fakeImages.length
  const translateArray = returnTranslateXArray(numberOfImage, currentSlide)

  const [array2, setArray2] = useState(Array(numberOfImage).map((_, index) => index))

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1)
  }
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => prev - 1)
  }

  console.log('translateArray: ', translateArray)
  console.log('currentSlide: ', currentSlide)
  return (
    <Container height={height} width={width}>
      <div className='slider-container'>
        {fakeImages.map((image, index) => (
          <div
            className='image-container'
            key={image.id}
            style={{ transform: `translateX(${100 * translateArray[index]}%)` }}
          >
            <img className='image' alt='' src={image.url} />
          </div>
        ))}

        <ul className='dots-container'>
          {Array(numberOfImage)
            .fill(0)
            .map((_, index) => (
              <li key={index} className={`dot-item ${index === currentSlide ? 'hight-light' : ''}`}>
                {/* hehe */}
              </li>
            ))}
        </ul>

        {currentSlide < numberOfImage - 1 && (
          <button className='arrow-container right-arrow' onClick={handleNextSlide}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='black'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </button>
        )}

        {currentSlide > 0 && (
          <button className='arrow-container left-arrow' onClick={handlePrevSlide}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='black'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </button>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div<{ height?: string; width?: string }>`
  .slider-container {
    overflow: hidden;
    position: relative;
    height: ${(props) => props.height || '468px'};
    width: ${(props) => props.width || '468px'};
    /* display: flex; */
    /* align-items: center; */

    .image-container {
      position: absolute;

      background-color: red;
      overflow: hidden;
      /* height: 468px;
      width: 468px; */
      height: 100%;

      width: 100%;

      transition: transform 0.3s ease-in-out;
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .dots-container {
      z-index: 10;
      position: absolute;

      left: 50%;
      bottom: 15px;
      transform: translate(-50%, 0);
      /* background-color: red; */
      padding: 0;

      display: flex;
      align-items: center;
      gap: 4px;

      .dot-item {
        background-color: #d8d4d4;
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .dot-item.hight-light {
        background-color: white;
      }
    }
  }

  .arrow-container {
    background-color: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
      width: 15px;
      height: 15px;
    }
  }

  .right-arrow {
    right: 14px;
  }

  .left-arrow {
    left: 14px;
  }
`
