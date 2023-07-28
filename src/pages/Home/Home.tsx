import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import NextButton from '~/components/NextButton'
import http from '~/utils/http'
import PostItem from './Components/Posts'
import Stories from './Components/Stories/Stories'
import Suggestions from './Components/Suggestions'

export default function Home() {
  const [isSuggestionVisible, setIsSuggestionVisible] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1158) {
        setIsSuggestionVisible(false)
      } else {
        setIsSuggestionVisible(true)
      }
    }

    // Attach the event listener to the window's resize event
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <div className='stories-and-posts-container'>
        <Stories />
        <div className='posts-container'>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
      {isSuggestionVisible && (
        <div className='suggestions-container'>
          <Suggestions />
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  /* background-color: #ddd; */
  height: 100vh;
  /* overflow: scroll; */

  width: 1013px;
  margin: 16px auto;

  /* padding: 14px 0 0 0; */

  display: flex;
  justify-content: center;
  gap: 64px;

  .stories-and-posts-container {

    /* background-color: green; */
    width: 630px;

    .posts-container {
      padding: 0 80px;

      .post-container {
      }
    }
  }

  /* @media (max-width: 1263px) {
    .suggestions-container {
      display: none;
    }
  } */
`
