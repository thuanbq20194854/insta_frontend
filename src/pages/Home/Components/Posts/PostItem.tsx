import { styled } from 'styled-components'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import ImageList from './ImageList'
import PostComment from './PostComment'
import Modal from '~/components/Modal'
import PostItemDetail from './PostItemDetail'
import PostActions from './PostActions'
import { useState } from 'react'

export default function PostItem() {
  const [postModalIsShown, setPostModalIsShown] = useState<boolean>(false)

  const handleOpenModal = () => {
    setPostModalIsShown(true)
    console.log('click')
  }

  const handleCloseModal = () => {
    setPostModalIsShown(false)
    console.log('clikc close')
  }

  console.log('postModalIsShown: ', postModalIsShown)

  return (
    <PostItemContainer className='post-container'>
      {postModalIsShown && (
        <Modal openModal={postModalIsShown} onCloseModal={handleCloseModal} content={<PostItemDetail />} />
      )}
      <PostHeader />

      <ImageList />

      <PostActions />

      <PostContent />

      <PostComment onOpenViewComment={handleOpenModal} />
    </PostItemContainer>
  )
}

const PostItemContainer = styled.div`
  font-size: 14px;

  padding: 0 0 20px;
  margin: 0 0 12px;
  border-bottom: 1px solid rgb(219, 219, 219);
`
