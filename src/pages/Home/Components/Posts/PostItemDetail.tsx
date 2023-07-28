import React from 'react'
import PostHeader from './PostHeader'
import { styled } from 'styled-components'
import Avatar2 from '~/components/Avatar/Avatar2'
import PostActions from './PostActions'
import Time from './Time'
import PostComment from './PostComment'
import CommemtList from './CommemtList'
import ImageList from './ImageList'

export default function PostItemDetail() {
  return (
    <Container>
      <ImageList height='90vh' width='90vh' />
      <div className='right-part'>
        <div className='post-header-wrapper'>
          <PostHeader showTimeOfPosting={false} />
        </div>

        <div className='horizontal-bar'></div>

        <div className='post-comments-wrapper'>
          <CommemtList />
        </div>

        <div className='horizontal-bar'></div>

        <div className='post-actions-wrapper'>
          <PostActions />
          <Time />
        </div>

        <div className='horizontal-bar'></div>

        <div className='add-comment-wrapper'>
          <PostComment EmojiSvgSize={24} EmojiSvgContainerPadding={8} />
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  z-index: 101;
  /* display: inline-block; */

  background-color: red;

  display: flex;
  align-items: center;
  height: 90vh;
  margin: 2px auto;
  /* width: 40vw; */

  /* background-color: red; */

  .right-part {
    height: 100%;
    background-color: white;

    display: flex;
    flex-direction: column;

    .horizontal-bar {
      border-bottom: 1px solid rgb(219, 219, 219);
    }

    .post-header-wrapper {
      width: 468px;
      padding: 14px 16px;
    }

    .post-comments-wrapper {
      flex: 1;
      /* background-color: green; */
      overflow: hidden;

      max-height: 60vh;
      overflow-y: scroll;

      width: 468px;
      padding: 14px 16px;

      /* For WebKit browsers like Chrome and Safari */

      &::-webkit-scrollbar {
        width: 1px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
    }

    .post-actions-wrapper {
      width: 468px;
      padding: 6px 16px;
    }

    .add-comment-wrapper {
      width: 468px;
      padding: 6px 16px;
    }
  }
`
