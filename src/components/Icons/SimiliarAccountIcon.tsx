import React from 'react'

interface Props {
  color?: string
  size?: number
}

export default function SimiliarAccountIcon({ color = 'rgb(0,0,0)', size = 16 }: Props) {
  return (
    <svg
      aria-label='Similar accounts'
      className='x1lliihq x1n2onr6'
      color={color}
      fill={color}
      height={size}
      role='img'
      viewBox='0 0 24 24'
      width={size}
    >
      <title>Similar accounts</title>
      <path
        d='M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z'
        fill='none'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d='M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
      <line
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={2}
        x1='5.001'
        x2='5.001'
        y1='7.998'
        y2='14.003'
      />
      <line
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={2}
        x1='8.004'
        x2='2.003'
        y1={11}
        y2={11}
      />
    </svg>
  )
}
