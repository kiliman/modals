import React from 'react'
import { useOvermind } from '../overmind'

const Modal = () => {
  const { state, actions } = useOvermind()
  return state.modals.testModal.isCurrent ? (
    <div>
      <h2>{state.modals.testModal.title}</h2>
      <button
        className="clear-completed"
        onClick={() => actions.modals.testModal.close(true)}
      >
        Close
      </button>
    </div>
  ) : null
}

export default Modal
