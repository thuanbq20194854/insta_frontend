interface PlayIcon {
  color?: string
  fill?: string
  height: number
  width: number
  padding?: number
  onClick?: () => void
}

export default function PlayIcon(props: PlayIcon) {
  const { color, fill, height, width, padding, onClick } = props
  return (
    <div style={{ padding: `${padding}px` }} onClick={onClick} onKeyPress={onClick} role='button' tabIndex={0}>
      <svg
        aria-label='Play'
        className='x1lliihq x1n2onr6'
        color={color}
        fill={fill}
        height={height}
        width={width}
        role='img'
        viewBox='0 0 24 24'
      >
        <title>Play</title>
        <path d='M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z' />
      </svg>
    </div>
  )
}
