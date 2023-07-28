import React, { ReactElement } from 'react'

interface SidebarItemProps {
  isActive: boolean
  defaultIcon: ReactElement
  activeIcon: ReactElement
  title: string
}

export default function SidebarItem(props: SidebarItemProps) {
  const { isActive, defaultIcon, activeIcon, title } = props
  return (
    <div className='link-container'>
      <div className='icon-container'>{isActive ? defaultIcon : activeIcon}</div>

      <div className={isActive ? 'link-title active' : 'link-title'}>{title}</div>
    </div>
  )
}
