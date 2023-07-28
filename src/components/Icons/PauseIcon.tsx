import React from 'react'

interface PauseIconProps {
  color?: string
  fill?: string
  height: number
  width: number
  padding?: number
  onClick?: () => void
}

export default function PauseIcon(props: PauseIconProps) {
  const { color, fill, height, width, padding, onClick } = props

  return (
    <div style={{ padding: `${padding}px` }} onClick={onClick} onKeyPress={onClick} role='button' tabIndex={0}>
      <svg
        aria-label='Pause'
        className='x1lliihq x1n2onr6'
        color={color}
        fill={fill}
        height={height}
        width={width}
        role='img'
        viewBox='0 0 48 48'
      >
        <title>Pause</title>
        <path d='M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z' />
      </svg>
    </div>
  )
}
