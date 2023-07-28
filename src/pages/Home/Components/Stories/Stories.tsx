import React, { useState } from 'react'
import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import StoryItem from './StoryItem'
import Modal from '~/components/Modal'
import StoryView from './StoryViewList'
import StoryViewList from './StoryViewList'

const fake_stories = [
  {
    id: '1',
    user_name: 'leomessi',
    comment_content:
      'Muchas gracias por todas las felicitaciones!! Disfrutando muchísimo este año de poder festejarlo en Rosario junto a personas que quiero mucho. Un abrazo enorme!!!',
    time: '16h',
    like: 6,
    avatar:
      'https://images.pexels.com/photos/17183272/pexels-photo-17183272/free-photo-of-world-trade-center-transportation-hub-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    reply: [
      {
        id: '2',

        avatar:
          'https://images.pexels.com/photos/14207351/pexels-photo-14207351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '3',

        avatar:
          'https://images.pexels.com/photos/17096437/pexels-photo-17096437/free-photo-of-01-06.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      },
      {
        id: '4',

        avatar:
          'https://images.pexels.com/photos/17044901/pexels-photo-17044901/free-photo-of-snow-dawn-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '5',

        avatar:
          'https://images.pexels.com/photos/16159464/pexels-photo-16159464/free-photo-of-clear-sky-over-sunlit-white-walls.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      },
      {
        id: '6',
        avatar:
          'https://images.pexels.com/photos/908714/pexels-photo-908714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '7',

        avatar:
          'https://images.pexels.com/photos/908714/pexels-photo-908714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      }
    ]
  },
  {
    id: '8',

    avatar:
      'https://images.pexels.com/photos/17127838/pexels-photo-17127838/free-photo-of-evening-photo-of-a-teenage-girl-running-and-looking-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'thuanbuideptraivcl252',
    comment_content: '😍❤️🔥😍',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '9',

    avatar:
      'https://images.pexels.com/photos/15415189/pexels-photo-15415189/free-photo-of-facade-of-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'melchioribrenda',
    comment_content:
      'Feliz cumpleaños Messi pásala lindo campeón te amo mucho Dios te bendiga Messi pásala muy lindo ❤️🎂🎇',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '10',

    avatar:
      'https://images.pexels.com/photos/12222912/pexels-photo-12222912.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'martomeister_',
    comment_content: 'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
    time: '3h',
    like: 1005,

    reply: []
  },
  {
    id: '11',

    avatar:
      'https://images.pexels.com/photos/17389139/pexels-photo-17389139/free-photo-of-photography-architecture-windows-symmetrical.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'leomessi',
    comment_content:
      'Muchas gracias por todas las felicitaciones!! Disfrutando muchísimo este año de poder festejarlo en Rosario junto a personas que quiero mucho. Un abrazo enorme!!!',
    time: '16h',
    like: 6,

    reply: []
  },
  {
    id: '12',

    avatar:
      'https://images.pexels.com/photos/9323900/pexels-photo-9323900.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'thuanbuideptraivcl252',
    comment_content: '😍❤️🔥😍',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '13',

    avatar:
      'https://images.pexels.com/photos/17404194/pexels-photo-17404194/free-photo-of-a-man-walking-in-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'melchioribrenda',
    comment_content:
      'Feliz cumpleaños Messi pásala lindo campeón te amo mucho Dios te bendiga Messi pásala muy lindo ❤️🎂🎇',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '14',

    avatar:
      'https://images.pexels.com/photos/17395536/pexels-photo-17395536/free-photo-of-the-waves-are-calling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'martomeister_',
    comment_content: 'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
    time: '3h',
    like: 1005,

    reply: []
  },
  {
    id: '1',
    user_name: 'leomessi',
    comment_content:
      'Muchas gracias por todas las felicitaciones!! Disfrutando muchísimo este año de poder festejarlo en Rosario junto a personas que quiero mucho. Un abrazo enorme!!!',
    time: '16h',
    like: 6,
    avatar:
      'https://images.pexels.com/photos/17183272/pexels-photo-17183272/free-photo-of-world-trade-center-transportation-hub-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    reply: [
      {
        id: '2',

        avatar:
          'https://images.pexels.com/photos/14207351/pexels-photo-14207351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '3',

        avatar:
          'https://images.pexels.com/photos/17096437/pexels-photo-17096437/free-photo-of-01-06.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      },
      {
        id: '4',

        avatar:
          'https://images.pexels.com/photos/17044901/pexels-photo-17044901/free-photo-of-snow-dawn-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '5',

        avatar:
          'https://images.pexels.com/photos/16159464/pexels-photo-16159464/free-photo-of-clear-sky-over-sunlit-white-walls.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      },
      {
        id: '6',
        avatar:
          'https://images.pexels.com/photos/908714/pexels-photo-908714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '7',

        avatar:
          'https://images.pexels.com/photos/908714/pexels-photo-908714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      }
    ]
  },
  {
    id: '8',

    avatar:
      'https://images.pexels.com/photos/17127838/pexels-photo-17127838/free-photo-of-evening-photo-of-a-teenage-girl-running-and-looking-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'thuanbuideptraivcl252',
    comment_content: '😍❤️🔥😍',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '9',

    avatar:
      'https://images.pexels.com/photos/15415189/pexels-photo-15415189/free-photo-of-facade-of-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'melchioribrenda',
    comment_content:
      'Feliz cumpleaños Messi pásala lindo campeón te amo mucho Dios te bendiga Messi pásala muy lindo ❤️🎂🎇',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '10',

    avatar:
      'https://images.pexels.com/photos/12222912/pexels-photo-12222912.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'martomeister_',
    comment_content: 'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
    time: '3h',
    like: 1005,

    reply: []
  },
  {
    id: '11',

    avatar:
      'https://images.pexels.com/photos/17389139/pexels-photo-17389139/free-photo-of-photography-architecture-windows-symmetrical.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'leomessi',
    comment_content:
      'Muchas gracias por todas las felicitaciones!! Disfrutando muchísimo este año de poder festejarlo en Rosario junto a personas que quiero mucho. Un abrazo enorme!!!',
    time: '16h',
    like: 6,

    reply: []
  },
  {
    id: '12',

    avatar:
      'https://images.pexels.com/photos/9323900/pexels-photo-9323900.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'thuanbuideptraivcl252',
    comment_content: '😍❤️🔥😍',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '13',

    avatar:
      'https://images.pexels.com/photos/17404194/pexels-photo-17404194/free-photo-of-a-man-walking-in-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'melchioribrenda',
    comment_content:
      'Feliz cumpleaños Messi pásala lindo campeón te amo mucho Dios te bendiga Messi pásala muy lindo ❤️🎂🎇',
    time: '3h',
    like: 4,

    reply: []
  },
  {
    id: '14',

    avatar:
      'https://images.pexels.com/photos/17395536/pexels-photo-17395536/free-photo-of-the-waves-are-calling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'martomeister_',
    comment_content: 'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
    time: '3h',
    like: 1005,

    reply: []
  },
  {
    id: '1',
    user_name: 'leomessi',
    comment_content:
      'Muchas gracias por todas las felicitaciones!! Disfrutando muchísimo este año de poder festejarlo en Rosario junto a personas que quiero mucho. Un abrazo enorme!!!',
    time: '16h',
    like: 6,
    avatar:
      'https://images.pexels.com/photos/17183272/pexels-photo-17183272/free-photo-of-world-trade-center-transportation-hub-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    reply: [
      {
        id: '2',

        avatar:
          'https://images.pexels.com/photos/14207351/pexels-photo-14207351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '3',

        avatar:
          'https://images.pexels.com/photos/17096437/pexels-photo-17096437/free-photo-of-01-06.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      },
      {
        id: '4',

        avatar:
          'https://images.pexels.com/photos/17044901/pexels-photo-17044901/free-photo-of-snow-dawn-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '5',

        avatar:
          'https://images.pexels.com/photos/16159464/pexels-photo-16159464/free-photo-of-clear-sky-over-sunlit-white-walls.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      },
      {
        id: '6',
        avatar:
          'https://images.pexels.com/photos/908714/pexels-photo-908714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'bladeefan122',
        comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
        time: '4h',
        like: 6
      },
      {
        id: '7',

        avatar:
          'https://images.pexels.com/photos/908714/pexels-photo-908714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        user_name: 'elgis.18',
        comment_content: '@blrlandon out here defending every antigay comment. Little dork',
        time: '44m',
        like: 2
      }
    ]
  },
  {
    id: '8',

    avatar:
      'https://images.pexels.com/photos/17127838/pexels-photo-17127838/free-photo-of-evening-photo-of-a-teenage-girl-running-and-looking-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'thuanbuideptraivcl252',
    comment_content: '😍❤️🔥😍',
    time: '3h',
    like: 4,

    reply: []
  }
]

const returnTranslateXArray = (lengthOfArray: number, currentSlide: number) => {
  // eslint-disable-next-line prefer-const
  let returnedArray = Array(lengthOfArray)

  for (let i = 0; i < lengthOfArray; i++) {
    returnedArray[i] = i - currentSlide
  }

  return returnedArray
}

export default function Stories() {
  //current slide = head , currentSlide + 7 là tail
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const numberOfImage: number = fake_stories.length
  const translateArray = returnTranslateXArray(numberOfImage, currentSlide)

  const handleNextSlide = () => {
    if (currentSlide + 7 === numberOfImage - 1) {
      return
    }

    if (currentSlide + 7 + 3 > numberOfImage - 1) {
      setCurrentSlide((prev) => prev + (numberOfImage - 1 - (currentSlide + 7)))

      return
    }
    setCurrentSlide((prev) => prev + 4)
  }
  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      return 0
    }
    if (currentSlide < 4 && currentSlide > 0) {
      setCurrentSlide(0)
      return
    }

    setCurrentSlide((prev) => prev - 4)
  }

  console.log('head: ', currentSlide)
  console.log('tail: ', currentSlide + 7)
  console.log('fake_stories.length: ', fake_stories.length)

  const [showStoryView, setShowStoryView] = useState<boolean>(false)

  const handleCloseStoryView = () => {
    setShowStoryView(false)
  }

  const handleOpenStoryView = () => {
    setShowStoryView(true)
  }

  return (
    <Container>
      <ul className='story-list'>
        <li className='li-set-width'></li>
        {fake_stories.map((story, index) => (
          // style={{ transform: `translateX(${100 * (1 - positionOfHeadAndTail.head)}%)` }}
          // <li key={index} style={{ transform: `translateX(${79 * (1 - positionOfHeadAndTail.head)}px)` }}>
          // <li className='li-story-item' key={index} style={{ transform: `translateX(${index * 80}px)` }}>
          <li
            className='li-story-item'
            key={index}
            style={{ transform: `translateX(${80 * translateArray[index]}px)` }}
            onClick={handleOpenStoryView}
            onKeyPress={handleOpenStoryView}
            role='presentation'
          >
            <StoryItem avatar={story.avatar} userName={story.user_name} />
          </li>
        ))}
      </ul>

      {currentSlide + 7 < numberOfImage - 1 && (
        <div className='arrow-container right-arrow' onClick={handleNextSlide} aria-hidden='true'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='black'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      )}
      {currentSlide > 0 && (
        <div className='arrow-container left-arrow' onClick={handlePrevSlide} aria-hidden='true'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='black'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </div>
      )}

      {showStoryView && (
        <Modal
          color='#1A1A1A'
          openModal={showStoryView}
          onCloseModal={handleCloseStoryView}
          content={<StoryViewList />}
          setCloseOnClickModal={false}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  /* margin: 16px 0 0 0; */
  padding: 16px 0;
  /* background-color: green; */

  /* background-color: red; */

  position: relative;
  height: 117px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  .arrow-container {
    background-color: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;

    position: absolute;
    top: 53px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
      width: 15px;
      height: 15px;
    }
  }

  .right-arrow {
    right: 5px;
  }

  .left-arrow {
    left: 5px;
  }

  .story-list {
    display: flex;
    align-items: center;
    gap: 5px;

    /* position: relative; */
    /* background-color: black; */

    .li-set-width {
      width: 630px;
      height: 85px;
      /* background-color: green; */
    }

    .li-story-item {
      transition: transform 0.3s ease-in-out;
      width: 80px;

      position: absolute;
    }
  }
`
