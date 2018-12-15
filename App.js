import React from 'react'
import {createAppContainer, createStackNavigator} from 'react-navigation'
import LoginScreen from './screens/homeScreen'
import HomeScreen from './screens/loginScreen'

const RootStack  = createStackNavigator({
  Login: LoginScreen,
  //Home: HomeScreen
})

const App = createAppContainer(RootStack)
export default App
