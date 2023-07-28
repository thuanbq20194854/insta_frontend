import { useRef, useState } from 'react'
import { styled } from 'styled-components'
import EmojiSvg from '~/components/Icons/EmojiSvg'

interface PostCommentProps {
  EmojiSvgSize?: number
  EmojiSvgContainerPadding?: number
  showViewComment?: boolean
  onOpenViewComment?: () => void
}

export default function PostComment(props: PostCommentProps) {
  const { EmojiSvgSize = 13, showViewComment, onOpenViewComment, EmojiSvgContainerPadding = 0 } = props

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [displayPostButton, setDisplayPostButton] = useState<boolean>(false)

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '18px'
      textareaRef.current.style.height = `${Math.min(80, textareaRef.current.scrollHeight)}px`
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustTextareaHeight()

    if (event.target.value.trim().length > 0 && displayPostButton === false) {
      setDisplayPostButton(true)
    }
    if (event.target.value.trim().length === 0 && displayPostButton === true) {
      setDisplayPostButton(false)
    }
  }
  return (
    <Container className='comments-container'>
      <button className='view-comments' onClick={onOpenViewComment}>
        View all 110 comments!
      </button>

      <div className='add-comment-container'>
        {/* <div className='comment-container'> */}

        <div className='text-area-container'>
          <textarea
            ref={textareaRef}
            onChange={handleChange}
            className='comment-text-area'
            placeholder='Add a comment...'
          />
        </div>

        {/* </div> */}

        {displayPostButton && <div className='post-btn'>Post</div>}

        <div className='icon-container' style={{ padding: `${EmojiSvgContainerPadding}px` }}>
          <EmojiSvg size={EmojiSvgSize} />
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  /* margin-top: 10px; */
  .view-comments {
    color: #737373;
    font-size: 14px;

    cursor: pointer;
  }

  .add-comment-container {
    margin-top: 6px;
    color: #737373;

    display: flex;
    align-items: center;

    .text-area-container {
      flex: 1;

      display: flex;
      align-items: center;

      textarea {
        width: 100%;
        resize: none; /* Disable resizing */
        outline: none;

        font-size: 14px;
        border: 1px solid black;

        height: 18px;

        /* background-color: red; */
        padding: 0;

        border-color: transparent;
      }

      textarea:is(:focus, :valid) {
        /* border-color: black; */
      }
    }
    .post-btn {
      color: #0095f6;
      font-size: 14px;
      font-weight: 500;
      padding: 0 8px;

      &:hover {
        color: rgb(0, 55, 107);
      }
    }

    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;
    }
  }
`
