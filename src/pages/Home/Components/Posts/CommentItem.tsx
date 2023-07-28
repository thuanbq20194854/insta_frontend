import React, { useState } from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import Avatar2 from '~/components/Avatar/Avatar2'
import MoreOptionSvg from '~/components/Icons/MoreOptionSvg'
import { TComment } from '~/types/comment.type'

interface ICommentItemProps {
  comment: TComment
}

export default function CommentItem(props: ICommentItemProps) {
  const { avatar, user_name, comment_content, time, like } = props.comment

  const [displayReplies, setDisplayReplies] = useState<boolean>(false)
  return (
    <Container>
      <div className='main-comment-part'>
        <Avatar image_size={32} imageURL={avatar} />
        <div className='information-container'>
          <div className='text-content'>
            <span className='user-name'>{user_name}</span>
            {comment_content}
          </div>

          <div className='image-content'> </div>

          <div className='related-information'>
            <div className='time'>{time}</div>
            <div className='like'>{like} likes</div>
            <div className='reply-btn'>Reply</div>
            <div className='more-options'>
              <MoreOptionSvg />
            </div>
          </div>
        </div>
      </div>
      <div className='heart'>
        <svg aria-label='Like' role='img' viewBox='0 0 24 24'>
          <title>Like</title>
          <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z' />
        </svg>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  .main-comment-part {
    flex-grow: 1;

    display: flex;

    .information-container {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding-left: 8px;

      .text-content {
        font-size: 14px;

        .user-name {
          color: #262626;
          margin-right: 10px;
          font-weight: 500;

          cursor: pointer;

          &:hover {
            color: #beb3b3;
          }
        }

        .comment-text {
        }
      }

      .image-content {
      }

      .related-information {
        font-size: 12px;
        font-weight: 500;

        color: #737373;
        display: flex;
        align-items: center;

        gap: 15px;

        .time {
          cursor: pointer;
        }

        .like {
          cursor: pointer;
        }

        .reply-btn {
          cursor: pointer;
        }

        .more-options {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          opacity: 0;
        }
      }

      &:hover .more-options {
        opacity: 100;
      }
    }
  }

  .heart {
    top: 5px;
    right: 0;

    display: inline-block;

    svg {
      color: rgb(38, 38, 38);
      fill: rgb(38, 38, 38);
      height: 12px;
      width: 12px;

      cursor: pointer;

      &:hover {
        color: #737373;
        fill: #737373;
      }
    }
  }
`
