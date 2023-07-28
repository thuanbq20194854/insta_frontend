import React from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'

interface StoryItemProps {
  avatar: string
  userName: string
}

export default function StoryItem(props: StoryItemProps) {
  const { avatar, userName } = props

  return (
    <Container>
      <Avatar imageURL={avatar} image_size={56} />
      <p className='name'>12313123123131231231</p>
    </Container>
  )
}

const Container = styled.div`
  height: 122px;
  width: 74px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  cursor: pointer;

  .name {
    margin: 0;
    font-size: 12px;
    width: 74px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
