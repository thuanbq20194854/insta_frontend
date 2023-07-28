import React from 'react'
import { styled } from 'styled-components'

interface DownIconProps {
  size?: number
  color?: string
  wrapperClassName?: string
}

export default function DownIcon({ size = 12, color = 'rgb(0,0,0)', wrapperClassName }: DownIconProps) {
  return (
    <div className={wrapperClassName}>
      <svg
        aria-label='Down chevron icon'
        className='x1lliihq x1n2onr6'
        color={color}
        fill={color}
        height={size}
        role='img'
        viewBox='0 0 24 24'
        width={size}
      >
        <title>Down chevron icon</title>
        <path d='M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z' />
      </svg>
    </div>
  )
}
