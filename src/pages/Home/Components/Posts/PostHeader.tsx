import React from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import MoreOptionSvg from '~/components/Icons/MoreOptionSvg'
import NextButton from '~/components/NextButton'

interface PostHeaderProps {
  showTimeOfPosting?: boolean
  lowTextPart?: string
  padding?: string
  image_size?: number
}

export default function PostHeader(props: PostHeaderProps) {
  const { showTimeOfPosting = true, lowTextPart = 'testing@178', image_size = 32 } = props
  return (
    <Container className='post-header'>
      <div className='user-information'>
        <Avatar
          image_size={image_size}
          imageURL='https://images.pexels.com/photos/17305999/pexels-photo-17305999.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        />
        <div className='text-infomation'>
          <div className='up-part'>
            <div className='user-name'>muahathangsau_</div>
            {showTimeOfPosting && (
              <>
                <span className='point'>•</span>
                <div className='time'>2d</div>
              </>
            )}
            <span className='point'>•</span>
            <div className='following-btn'>Follow</div>
          </div>
          <div className='low-part'>{lowTextPart}</div>
        </div>

        <NextButton />
      </div>

      <div className='more-options'>
        <MoreOptionSvg size={24} color='rgb(115,115,115)' fill='rgb(115,115,115)' />
      </div>
    </Container>
  )
}

const Container = styled.div`
  /* background-color: green; */
  width: 100%;

  display: flex;
  align-items: center;

  background-color: white;
  /* justify-content: center; */

  .user-information {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .text-infomation {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 5px;

      margin-left: 10px;
      padding: 9px 0;

      font-size: 14px;

      .up-part {
        display: flex;
        align-items: center;
        gap: 5px;

        .user-name {
          font-weight: 500;
          cursor: pointer;

          &:hover {
            color: #737373;
          }
        }

        .point {
          color: #737373;
        }

        .time {
          color: #737373;
        }

        .following-btn {
          color: #0095f6;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;

          &:hover {
            color: rgb(0, 55, 107);
          }
        }
      }

      .low-part {
        font-size: 12px;
      }
    }
  }

  .more-options {
    padding: 8px;

    svg {
      cursor: pointer;
    }
  }
`
