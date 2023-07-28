import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import PlayIcon from '~/components/Icons/PlayIcon'
import PauseIcon from '~/components/Icons/PauseIcon'
import SoundIcon from '~/components/Icons/SoundIcon'
import MuteSoundIcon from '~/components/Icons/MuteSoundIcon'
import MoreOptionSvg from '~/components/Icons/MoreOptionSvg'

interface StoryViewItemProps {
  avatar: string
  user_name: string
  time: string
  story: string

  stories?: string[]

  isViewing?: boolean
}

export default function StoryViewItem(props: StoryViewItemProps) {
  const { isViewing = false, avatar, user_name, time, story } = props

  const [isVideoPlay, setIsVideoPlay] = useState<boolean>(true)
  const [hasSound, setHasSound] = useState<boolean>(true)

  const handleToggleVideoPlay = () => {
    setIsVideoPlay((prev) => !prev)
  }

  const handleToggleSound = () => {
    setHasSound((prev) => !prev)
  }

  return (
    <>
      {isViewing && (
        <DetailStoryContainer>
          <div className='story-information'>
            <ProgressBar />
            <div className='infor-and-actions'>
              <div className='user-infor'>
                <Avatar image_size={32} imageURL={avatar} />
                <div className='text-infor'>
                  <div className='username'>{user_name}</div>
                  <div className='time'>{time}</div>
                </div>
              </div>
              <div className='actions-container'>
                {isVideoPlay && (
                  <PlayIcon
                    height={16}
                    width={16}
                    color='#FFFFFF'
                    fill='#FFFFFF'
                    padding={8}
                    onClick={handleToggleVideoPlay}
                  />
                )}
                {!isVideoPlay && (
                  <PauseIcon
                    height={16}
                    width={16}
                    color='#FFFFFF'
                    fill='#FFFFFF'
                    padding={8}
                    onClick={handleToggleVideoPlay}
                  />
                )}
                {hasSound && (
                  <SoundIcon
                    height={16}
                    width={16}
                    color='#FFFFFF'
                    fill='#FFFFFF'
                    padding={8}
                    onClick={handleToggleSound}
                  />
                )}
                {!hasSound && (
                  <MuteSoundIcon
                    height={16}
                    width={16}
                    color='#FFFFFF'
                    fill='#FFFFFF'
                    padding={8}
                    onClick={handleToggleSound}
                  />
                )}
                <MoreOptionSvg height={16} width={16} color='#FFFFFF' fill='#FFFFFF' padding={8} />
              </div>
            </div>
          </div>

          <div></div>
        </DetailStoryContainer>
      )}
      {!isViewing && (
        <SummaryStoryContainer>
          <div className='information-container'>
            <Avatar image_size={56} imageURL={avatar} />
            <div className='username'>{user_name}</div>
            <div className='time'>{time}</div>
          </div>
          <div className='story-container'>
            <img className='story-image' src={story} alt='' />
          </div>
        </SummaryStoryContainer>
      )}
    </>
  )
}

const DetailStoryContainer = styled.div`
  /* background-color: red; */
  background-color: green;

  height: 96vh;
  width: 54vh;

  .story-information {
    padding: 20px 16px 32px;

    .infor-and-actions {
      margin-top: 15px;

      display: flex;
      align-items: center;

      .user-infor {
        flex-grow: 1;

        display: flex;
        align-items: center;
        gap: 10px;

        .text-infor {
          display: flex;
          align-items: center;
          gap: 10px;

          flex-grow: 1;

          .username {
            font-size: 14px;
            color: white;
          }
          .time {
            font-size: 14px;
            color: #737373;
          }
        }
      }

      .actions-container {
        display: flex;
        svg {
          cursor: pointer;
        }
      }
    }
  }
`

const SummaryStoryContainer = styled.div`
  background-color: green;

  height: 38vh;
  width: 22vh;

  position: relative;

  border-radius: 5px;
  overflow: hidden;

  cursor: pointer;

  .information-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    /* overflow: shrink; */

    .username {
      font-size: 14px;
      color: #ffffff;
      font-weight: 500;

      width: 100%;

      white-space: pre-wrap; /* Allow wrapping to new lines */
      word-wrap: break-word; /* Handle long words by breaking them */
    }
    .time {
      font-size: 14px;
      color: #ffffff;
    }
  }

  .story-container {
    position: absolute;

    height: 100%;
    width: 100%;

    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
