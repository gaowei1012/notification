import * as React from 'react'
import DynamicTabNavigator from './navigation/DynamicTabNavigator'
import { StoreProvider } from './hooks/useStore'

const App = () => {
  return <StoreProvider>
    <DynamicTabNavigator />
  </StoreProvider>
}

export default App
