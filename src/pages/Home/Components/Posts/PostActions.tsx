import React from 'react'
import { styled } from 'styled-components'
import { formatCurrency } from '~/utils/utils'

export default function PostActions() {
  return (
    <Container>
      <div className='actions-container'>
        <div className='icon-container mf-minus-8px'>
          <svg aria-label='Like' role='img' viewBox='0 0 24 24'>
            <path d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z' />
          </svg>
        </div>
        <div className='icon-container'>
          <svg
            aria-label='Comment'
            className='x1lliihq x1n2onr6'
            // color='rgb(115, 115, 115)'
            // fill='rgb(115, 115, 115)'
            height={24}
            role='img'
            viewBox='0 0 24 24'
            width={24}
          >
            <title>Comment</title>
            <path
              d='M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z'
              fill='none'
              stroke='currentColor'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className='icon-container'>
          <svg
            aria-label='Share Post'
            className='x1lliihq x1n2onr6'
            height={24}
            role='img'
            viewBox='0 0 24 24'
            width={24}
          >
            <title>Share Post</title>
            <line
              fill='none'
              stroke='currentColor'
              strokeLinejoin='round'
              strokeWidth={2}
              x1={22}
              x2='9.218'
              y1={3}
              y2='10.083'
            />
            <polygon
              fill='none'
              points='11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334'
              stroke='currentColor'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className='icon-container end '>
          <svg aria-label='Save' height={24} role='img' viewBox='0 0 24 24' width={24} className='save-icon'>
            <title>Save</title>
            <polygon
              fill='none'
              points='20 21 12 13.44 4 21 4 3 20 3 20 21'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
      <div className='post-likes'>{formatCurrency(1007)} likes</div>
    </Container>
  )
}

const Container = styled.div`
  .actions-container {
    display: flex;
    align-items: center;

    margin-top: 4px;

    /* padding: 8px 0; */

    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 8px;

      cursor: pointer;

      &:hover {
        color: rgb(115, 115, 115);
        fill: rgb(115, 115, 115);
      }

      svg {
        width: 24px;
        height: 24px;
      }

      .save-icon:hover polygon {
        fill: black;
        color: black;
      }
    }

    .icon-container.end {
      flex: 1;

      display: flex;
      justify-content: end;
    }

    .mf-minus-8px {
      margin-left: -8px;
    }
  }

  .post-likes {
    font-weight: 500;
    font-size: 14px;
  }
`
