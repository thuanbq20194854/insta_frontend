import React, { useState } from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import MoreOptionSvg from '~/components/Icons/MoreOptionSvg'
import CommentItem from './CommentItem'
import { TComment } from '~/types/comment.type'

const fakeReplies = [
  {
    user_name: 'bladeefan122',
    comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
    time: '4h',
    like: 6
  },
  {
    user_name: 'elgis.18',
    comment_content: '@blrlandon out here defending every antigay comment. Little dork',
    time: '44m',
    like: 2
  },
  {
    user_name: 'bladeefan122',
    comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
    time: '4h',
    like: 6
  },
  {
    user_name: 'elgis.18',
    comment_content: '@blrlandon out here defending every antigay comment. Little dork',
    time: '44m',
    like: 2
  },
  {
    user_name: 'bladeefan122',
    comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
    time: '4h',
    like: 6
  },
  {
    user_name: 'elgis.18',
    comment_content: '@blrlandon out here defending every antigay comment. Little dork',
    time: '44m',
    like: 2
  }
]

export default function CommentReply(props: { replyList: TComment[] }) {
  const { replyList } = props

  const [showReply, setShowReply] = useState<boolean>(false)

  const handleViewReply = () => {
    setShowReply(true)
  }

  const handleHideReply = () => {
    setShowReply(false)
  }
  return (
    <Container>
      {replyList.length > 0 && (
        <div className='view-replies-btn'>
          <div className='horizontal-bar'></div>
          {!showReply && (
            <span
              className='view-replies-text'
              onClick={handleViewReply}
              onKeyPress={handleViewReply}
              role='button'
              tabIndex={0}
            >
              View replies ({replyList.length})
            </span>
          )}
          {showReply && (
            <span
              className='view-replies-text'
              onClick={handleHideReply}
              onKeyPress={handleHideReply}
              role='button'
              tabIndex={0}
            >
              {' '}
              Hide replies
            </span>
          )}
        </div>
      )}

      {showReply && (
        <ul>
          {replyList.map((replyComment) => (
            <li key={replyComment.id}>
              <CommentItem comment={replyComment} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}

const Container = styled.div`
  /* background-color: red; */
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 50px;

  .view-replies-btn {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 15px;

    cursor: pointer;
    .horizontal-bar {
      border-bottom: 1px solid #737373;
      width: 20px;
    }

    .view-replies-text {
      font-size: 12px;
      color: #737373;
      font-weight: 500;
    }
  }
`
