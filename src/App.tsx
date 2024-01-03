// eslint-disable-next-line import/no-unresolved
import './App.css'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <>{routeElements}</>
}

export default App
