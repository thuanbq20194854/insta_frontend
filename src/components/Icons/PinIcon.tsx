import React from 'react'

interface Props {
  padding?: string
  color?: string
  size?: number
}

export default function PinIcon({ padding = '8px', color = 'rgb(255, 255, 255)', size = 22 }: Props) {
  return (
    <div style={{ padding: padding }}>
      <svg
        aria-label='Pinned post icon'
        className='x1lliihq x1n2onr6'
        color={color}
        fill={color}
        height={size}
        role='img'
        viewBox='0 0 24 24'
        width={size}
      >
        <title>Pinned post icon</title>
        <path d='m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z' />
      </svg>
    </div>
  )
}
