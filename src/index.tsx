import * as React from 'react'
import { render } from 'react-dom'
import { createOvermind } from 'overmind'
import { config } from './overmind'
import { Provider } from 'overmind-react'

const overmind = createOvermind(config)

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  rootElement,
)
