import React, { useState } from 'react'
import { styled } from 'styled-components'

const TruncatedText = styled.div<{ isExpanded: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isExpanded ? 'none' : '1')};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 14px;

  .user-name {
    font-weight: 500;
    font-size: 14px;
    margin-right: 10px;
  }
`

const SeeMoreButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  color: #737373;
  font-size: 14px;
  cursor: pointer;
`

export default function PostContent() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleSeeMoreClick = () => {
    setIsExpanded(true)
  }
  return (
    <PostItemContent>
      <div className='post-content'>
        <TruncatedText isExpanded={isExpanded}>
          <span className='user-name'>muahathangsau_</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt ipsum explicabo incidunt ducimus, magni cum facere tenetur! Quisquam nam fuga repellendus minima
          harum reiciendis totam rem dolor excepturi? Suscipit, magni.
        </TruncatedText>
        {!isExpanded && <SeeMoreButton onClick={handleSeeMoreClick}>more</SeeMoreButton>}
      </div>
    </PostItemContent>
  )
}

const PostItemContent = styled.div`
  .post-content {
    margin-top: 5px;
    .content-container {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
`
