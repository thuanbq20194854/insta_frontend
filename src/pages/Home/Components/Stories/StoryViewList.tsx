import { styled } from 'styled-components'
import StoryViewItem from './StoryViewItem'

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
    story:
      'https://images.pexels.com/photos/12487176/pexels-photo-12487176.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: '8',

    avatar:
      'https://images.pexels.com/photos/17127838/pexels-photo-17127838/free-photo-of-evening-photo-of-a-teenage-girl-running-and-looking-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'thuanbuideptraivcl252',
    comment_content: '😍❤️🔥😍',
    time: '3h',
    like: 4,

    story:
      'https://images.pexels.com/photos/3029868/pexels-photo-3029868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
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
    story:
      'https://images.pexels.com/photos/17161076/pexels-photo-17161076/free-photo-of-relaxation-glass-luxury-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: '10',

    avatar:
      'https://images.pexels.com/photos/12222912/pexels-photo-12222912.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'martomeister_',
    comment_content: 'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
    time: '3h',
    like: 1005,

    story:
      'https://images.pexels.com/photos/13996060/pexels-photo-13996060.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
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

    story:
      'https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: '12',

    avatar:
      'https://images.pexels.com/photos/9323900/pexels-photo-9323900.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'thuanbuideptraivcl252',
    comment_content: '😍❤️🔥😍',
    time: '3h',
    like: 4,

    story:
      'https://images.pexels.com/photos/17405328/pexels-photo-17405328/free-photo-of-large-doorway-on-a-lavender-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
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

    story:
      'https://images.pexels.com/photos/7148455/pexels-photo-7148455.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: '14',

    avatar:
      'https://images.pexels.com/photos/17395536/pexels-photo-17395536/free-photo-of-the-waves-are-calling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    user_name: 'martomeister_',
    comment_content: 'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
    time: '3h',
    like: 1005,

    story:
      'https://images.pexels.com/photos/14573146/pexels-photo-14573146.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  }
]

export default function StoryViewList() {
  return (
    <Container>
      <ul className='story-list'>
        {fake_stories.map((story, index) => (
          <li key={story.id}>
            <StoryViewItem
              avatar={story.avatar}
              user_name={story.user_name}
              time={story.time}
              story={story.story}
              isViewing={index === 2}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  .story-list {
    display: flex;
    align-items: center;
    gap: 5vh;

    width: 162vh;
    overflow: hidden;
  }
`
