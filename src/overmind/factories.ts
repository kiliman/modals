import { IAction, IDerive, IState } from 'overmind'

export const createModals = <
  T extends {
    [name: string]: {
      state?: IState
      result?: unknown
    }
  }
>(
  modals: T,
): {
  state?: {
    current: keyof T
  } & {
    [K in keyof T]: T[K]['state'] & { isCurrent: IDerive<any, any, boolean> }
  }
  actions?: {
    [K in keyof T]: {
      open: IAction<
        any,
        T[K]['state'] extends IState ? T[K]['state'] : void,
        Promise<T[K]['result']>
      >
      close: IAction<any, T[K]['result']>
    }
  }
} => {
  function createModal(name, modal) {
    let resolver

    const open = async ({ state }, newState = {}) => {
      state.modals.current = name

      Object.assign(state.modals[name], newState)

      return new Promise(resolve => {
        resolver = resolve
      })
    }

    const close = async ({ state }, payload) => {
      state.modals.current = null
      resolver(payload || modal.result)
    }

    return {
      state: {
        ...modal.state,
        isCurrent(_, root) {
          return root.modals.current === name
        },
      },
      actions: {
        open,
        close,
      },
    }
  }

  return Object.keys(modals).reduce(
    (aggr, name) => {
      const modal = createModal(name, modals[name])

      aggr.state[name] = modal.state
      aggr.actions[name] = modal.actions

      return aggr
    },
    {
      state: {
        current: null,
      },
      actions: {},
    },
  ) as any
}
