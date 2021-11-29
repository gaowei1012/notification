
import React from 'react'
import { useLocalStore } from 'mobx-react-lite'
import rootStore, { RootStore } from '../stores/index'

const storeContext = React.createContext<RootStore | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalStore(() => rootStore)
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  )
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}