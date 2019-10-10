import React, { useCallback } from 'react'
import { useOvermind } from '../overmind'

import Modal from './Modal'

const App = () => {
  const { state, actions } = useOvermind()
  return (
    <>
      <h1>This is a test</h1>
      <button onClick={actions.testAction}>Show Modal</button>
      <Modal />
    </>
  )
}

export default App
