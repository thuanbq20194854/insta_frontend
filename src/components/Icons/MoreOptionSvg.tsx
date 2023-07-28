import React from 'react'

interface MoreOptionProps {
  color?: string
  fill?: string
  size?: number
  padding?: number

  onClick?: () => void
}

export default function MoreOptionSvg(props: MoreOptionProps) {
  const { color, fill, size, padding, onClick } = props

  return (
    <div
      style={{ padding: `${padding}px`, cursor: 'pointer' }}
      onClick={onClick}
      onKeyPress={onClick}
      role='button'
      tabIndex={0}
    >
      <svg
        aria-label='Comment Options'
        className='x1lliihq x1n2onr6'
        role='img'
        viewBox='0 0 24 24'
        color={color}
        fill={fill}
        height={size}
        width={size}
      >
        <title>Comment Options</title>
        <circle cx={12} cy={12} r='1.5' />
        <circle cx={6} cy={12} r='1.5' />
        <circle cx={18} cy={12} r='1.5' />
      </svg>
    </div>
  )
}
