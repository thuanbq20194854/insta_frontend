import React from 'react'

interface MuteSoundIconProps {
  color?: string
  fill?: string
  height: number
  width: number
  padding?: number
  onClick?: () => void
}

export default function MuteSoundIcon(props: MuteSoundIconProps) {
  const { color, fill, height, width, padding, onClick } = props

  return (
    <div style={{ padding: `${padding}px` }} onClick={onClick} onKeyPress={onClick} role='button' tabIndex={0}>
      <svg
        aria-label='Video has no audio.'
        className='x1lliihq x1n2onr6'
        color={color}
        fill={fill}
        height={height}
        width={width}
        role='img'
        viewBox='0 0 24 24'
      >
        <title>Video has no audio.</title>
        <path d='M11.403 1.083a1.001 1.001 0 0 0-1.082.187L5.265 6H2a1 1 0 0 0-1 1v10.003a1 1 0 0 0 1 1h3.265l5.01 4.682.02.021a1 1 0 0 0 1.704-.814L12.005 2a1 1 0 0 0-.602-.917ZM20.704 12l1.94-1.94a1.5 1.5 0 0 0-2.122-2.12l-1.939 1.939-1.94-1.94a1.5 1.5 0 1 0-2.12 2.122L16.461 12l-1.94 1.94a1.5 1.5 0 1 0 2.122 2.12l1.939-1.939 1.94 1.94a1.5 1.5 0 0 0 2.12-2.122Z' />
      </svg>
    </div>
  )
}
