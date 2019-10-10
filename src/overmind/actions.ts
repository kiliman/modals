import { AsyncAction } from 'overmind'

export const testAction: AsyncAction = async ({ state, actions }) => {
  // state.modals.current
  // state.modals.testModal.title
  // state.modals.testModal.isCurrent
  console.log('testAction')
  var result = await actions.modals.testModal.open({ title: 'Test Modal' })
  console.log(result)
}
