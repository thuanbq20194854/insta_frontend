import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import useRouteElement from './pages/useRouteElements'

function App() {
  const routeElements = useRouteElement()
  const [count, setCount] = useState(0)

  return <div>{routeElements}</div>
}

export default App
