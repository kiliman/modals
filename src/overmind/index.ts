import { createOvermind, IConfig } from 'overmind'
import { merge, namespaced } from 'overmind/config'
import { createHook } from 'overmind-react'
import { createModals } from './factories'
import { state } from './state'
import * as actions from './actions'
import * as modals from './modals'

const config = merge(
  {
    state,
    actions,
  },
  namespaced({
    modals: createModals(modals),
  }),
)

declare module 'overmind' {
  // tslint:disable:interface-name
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config)
export const useOvermind = createHook<typeof config>()
