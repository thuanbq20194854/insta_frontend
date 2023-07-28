import React from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'

interface SuggestionItemProps {
  image_size?: number
  avatar: string
  yourAccount?: boolean
  userAccount?: string
  userName?: string
}

export default function SuggestionItem(props: SuggestionItemProps) {
  const { image_size = 32, avatar, yourAccount = false } = props
  return (
    <Container>
      <Avatar image_size={image_size} imageURL={avatar} />
      <div className='user-information'>
        <div className='upper-part'>nauhtdz@234</div>
        {!yourAccount && <div className='lower-part'>Suggested for you</div>}
        {yourAccount && <div className='lower-part'>Thuận Bùi</div>}
      </div>

      {!yourAccount && <div className='action-btn'>Follow</div>}
      {yourAccount && <div className='action-btn'>Switch</div>}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 16px;

  .user-information {
    flex-grow: 1;
    .upper-part {
      font-size: 14px;
      font-weight: 500;

      cursor: pointer;

      &:hover {
        color: #737373;
      }
    }

    .lower-part {
      font-size: 12px;
      color: #737373;
    }
  }

  .action-btn {
    color: #0095f6;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: rgb(0, 55, 107);
    }
  }
`
