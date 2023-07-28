import { styled } from 'styled-components'
import Avatar from '~/components/Avatar'
import CommentItem from './CommentItem'
import CommentReply from './CommentReply'

const fake_comments = [
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
  }
]

export default function CommemtList() {
  return (
    <Container>
      <ul>
        {fake_comments.map((comment) => (
          <li key={comment.id}>
            <CommentItem comment={comment} />
            <CommentReply replyList={comment.reply} />
          </li>
        ))}
        {/* <li>
          <CommentItem
            comment={{
              user_name: 'martomeister_',
              comment_content:
                'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
              time: '3h',
              like: 1005
            }}
          />
          <CommentReply
            replies={[
              {
                user_name: 'bladeefan122',
                comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
                time: '4h',
                like: 6
              },
              {
                user_name: 'elgis.18',
                comment_content: '@blrlandon out here defending every antigay comment. Little dork',
                time: '44m',
                like: 2
              }
            ]}
          />
          <CommentItem
            comment={{
              user_name: 'martomeister_',
              comment_content:
                'Happy Birthday to you. Happy Birthday to you. Happy Birthday Leo Messi. Happy Birthday to you.',
              time: '3h',
              like: 1005
            }}
          />

          <CommentReply
            replies={[
              {
                user_name: 'bladeefan122',
                comment_content: '@achraf_zr04 🏳️‍🌈❤🏳️‍🌈❤🏳️‍🌈',
                time: '4h',
                like: 6
              },
              {
                user_name: 'elgis.18',
                comment_content: '@blrlandon out here defending every antigay comment. Little dork',
                time: '44m',
                like: 2
              }
            ]}
          />
        </li> */}
      </ul>
    </Container>
  )
}

const Container = styled.div``
