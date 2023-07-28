import { styled } from 'styled-components'
import Sidebar from '~/components/Sidebar'

interface MainLayoutProps {
  children?: React.ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
  const maxHeight = window.innerHeight
  console.log('Max height of viewport: ' + maxHeight)

  const { children } = props
  return (
    <SMainLayout>
      <Sidebar />
      <div className='content-container'>{children}</div>
    </SMainLayout>
  )
}

const SMainLayout = styled.div`
  .content-container {
    /* background-color: green; */

    /* display: flex; */

    padding-left: 268px;
  }

  @media (max-width: 1263px) {
    .content-container {
      padding-left: 48px;
    }
  }
`
