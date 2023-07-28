import { useState } from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import ALetterIcon from '~/components/Icons/ALetterIcon'
import BlueVerify from '~/components/Icons/BlueVerifyIcon'
import DarkerSimilarAccountIcon from '~/components/Icons/DarkerSimilarAccountIcon'
import DownIcon from '~/components/Icons/DownIcon'
import HeartIcon from '~/components/Icons/HeartIcon'
import MoreOptionSvg from '~/components/Icons/MoreOptionSvg'
import PinIcon from '~/components/Icons/PinIcon'
import SimiliarAccountIcon from '~/components/Icons/SimiliarAccountIcon'

export default function Account() {
  const [showSimilarAccount, setShowSimilarAccount] = useState<boolean>(false)
  const [isFollowing, setIsFollowing] = useState<boolean>(false)

  const handleToggleSimilar = () => {
    setShowSimilarAccount((prev) => !prev)
  }

  const handleToggleFollowing = () => {
    setIsFollowing((prev) => !prev)
  }

  return (
    <Container>
      {/* header */}
      <header className='header-container'>
        <div className='avatar-container'>
          <Avatar
            image_size={150}
            imageURL='https://images.pexels.com/photos/17490386/pexels-photo-17490386/free-photo-of-a-portrait-of-a-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          />
        </div>

        <div className='right-part'>
          <div className='user-name-and-actions'>
            <div className='user-name'>khanhvycff</div>
            <div>
              <BlueVerify />
            </div>

            <div className='actions-container'>
              <div
                className={`btn-container ${isFollowing ? 'following' : 'not-following'}`}
                onClick={handleToggleFollowing}
                onKeyPress={handleToggleFollowing}
                role='button'
                tabIndex={0}
              >
                <button>{isFollowing ? 'Following' : 'Follow'}</button>
                {/* <DownIcon /> */}
                {isFollowing && <DownIcon wrapperClassName='rotate-180' />}
              </div>
              <div className='btn-container message'>
                <button>Message</button>
              </div>
              <div
                className='btn-container similar'
                onClick={handleToggleSimilar}
                onKeyPress={handleToggleFollowing}
                role='button'
                tabIndex={0}
              >
                {showSimilarAccount ? <DarkerSimilarAccountIcon /> : <SimiliarAccountIcon />}
              </div>
            </div>

            <div className='a-letter-container'>
              <ALetterIcon size={24} />
            </div>

            <MoreOptionSvg padding={8} size={32} />
          </div>

          <div className='statistics-container'>
            <div className='statistic-item'>
              <span>743</span> posts
            </div>
            <div className='statistic-item'>
              <span>856K</span> followers
            </div>

            <div className='statistic-item'>
              <span>991</span> following
            </div>
          </div>

          <div className='username-container'>Nguyễn Khánh Vy</div>

          <div className='infor-detail'>
            📍MC ♡ YouTuber ♡ Book Author <br />
            🎞 YouTube: Khánh Vy OFFICIAL <br /> 🎥 TikTok: Khánh Vy <br />
            💻 Facebook: Khánh Vy <br /> Video mới / Latest Vid <br /> 🔽 youtu.be/FxCtQ0rIB4o
          </div>
        </div>
      </header>

      {/* related stories */}

      {/* TAB */}

      <div className='posts-container'>
        <div className='post-item-container'>
          <div className='image-container'>
            <img
              className='post-avatar'
              src='https://images.pexels.com/photos/17445669/pexels-photo-17445669/free-photo-of-city-landscape-fashion-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              alt=''
            />
          </div>
          <div className='pin-container'>
            <PinIcon />
          </div>

          <div className='actions-layer'>
            <div>
              <HeartIcon />
            </div>
          </div>
        </div>
      </div>

      {/* IMAGES */}
    </Container>
  )
}

const Container = styled.div`
  width: 935px;
  padding: 30px 20px 0;

  margin: 0 auto;

  .header-container {
    /* background-color: red; */

    display: flex;
    align-items: center;
    gap: 30px;

    .avatar-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right-part {
      .user-name-and-actions {
        display: flex;

        align-items: center;

        gap: 15px;

        .actions-container {
          display: flex;
          align-items: center;
          gap: 10px;
          .btn-container {
            background-color: #efefef;
            border-radius: 8px;

            font-size: 14px;
            font-weight: 500;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            &:hover {
              background-color: #dbdbdb;
            }

            .rotate-180 {
              display: inline-block;
              transform: rotate(180deg);
            }
          }

          .btn-container.following {
            padding: 7px 16px;
          }

          .btn-container.not-following button {
            color: white;
            padding: 7px 16px;
            background-color: #0095f6;

            border-radius: 8px;

            &:hover {
              background-color: #1877f2;
              color: white;
            }
          }

          .message {
            /* height: 34px; */
            padding: 7px 8px;
          }

          .similar {
            padding: 8px;
          }
        }

        .a-letter-container {
          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;
        }
      }

      .statistics-container {
        margin-top: 30px;

        display: flex;
        align-items: center;
        gap: 25px;

        .statistic-item {
          font-size: 16px;
          span {
            font-weight: 500;
          }
        }
      }

      .username-container {
        margin-top: 10px;
        font-size: 14px;

        font-weight: 500;
      }
    }
  }

  .posts-container {
    margin-top: 80px;
    border-top: 1px solid rgb(219, 219, 129);
    padding-top: 50px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 5px;
    /* width: 100%; */

    /* background-color: red; */

    .post-item-container {
      position: relative;

      cursor: pointer;

      .image-container {
        position: relative;
        padding-bottom: 100%;
        overflow: hidden;

        .post-avatar {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .pin-container {
        top: 0;
        left: 0;
        position: absolute;
        z-index: 10;

        width: 100%;

        /* background-color: red; */

        display: flex;
        justify-content: flex-end;
      }

      .actions-layer {
        display: none;

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.3);
      }
    }

    .post-item-container:hover .actions-layer {
      display: block;
    }
  }
`
