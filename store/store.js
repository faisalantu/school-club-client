import { useMemo } from 'react'
import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import auth ,{initialState_auth} from './auth/reduser';
let store

const rootReducer = combineReducers({
  auth:auth,
});
const initialState={
  auth:initialState_auth,
}
function initStore(preloadedState = initialState) { 
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware( thunk))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
      counter:{
        ...store.getState().counter,
         ...preloadedState.counter,
      },
      auth:{
        ...store.getState().auth,
        token: ((!preloadedState.auth || !preloadedState.auth.token)? store.getState().auth.token : preloadedState.auth.token),
      }
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
