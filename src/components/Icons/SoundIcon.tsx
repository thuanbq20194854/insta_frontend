import React from 'react'

interface SoundIconProps {
  color?: string
  fill?: string
  height: number
  width: number
  padding?: number
  onClick?: () => void
}

export default function SoundIcon(props: SoundIconProps) {
  const { color, fill, height, width, padding, onClick } = props

  return (
    <div style={{ padding: `${padding}px` }} onClick={onClick} onKeyPress={onClick} role='button' tabIndex={0}>
      <svg
        aria-label='Audio is playing'
        className='x1lliihq x1n2onr6'
        color={color}
        fill={fill}
        height={height}
        width={width}
        role='img'
        viewBox='0 0 24 24'
      >
        <title>Audio is playing</title>
        <path d='M16.636 7.028a1.5 1.5 0 1 0-2.395 1.807 5.365 5.365 0 0 1 1.103 3.17 5.378 5.378 0 0 1-1.105 3.176 1.5 1.5 0 1 0 2.395 1.806 8.396 8.396 0 0 0 1.71-4.981 8.39 8.39 0 0 0-1.708-4.978Zm3.73-2.332A1.5 1.5 0 1 0 18.04 6.59 8.823 8.823 0 0 1 20 12.007a8.798 8.798 0 0 1-1.96 5.415 1.5 1.5 0 0 0 2.326 1.894 11.672 11.672 0 0 0 2.635-7.31 11.682 11.682 0 0 0-2.635-7.31Zm-8.963-3.613a1.001 1.001 0 0 0-1.082.187L5.265 6H2a1 1 0 0 0-1 1v10.003a1 1 0 0 0 1 1h3.265l5.01 4.682.02.021a1 1 0 0 0 1.704-.814L12.005 2a1 1 0 0 0-.602-.917Z' />
      </svg>
    </div>
  )
}
