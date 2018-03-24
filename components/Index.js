import React, { Component } from 'react'
import { View } from 'react-native'

// All components
import Camera from './Camera/Index'
import Quiz from './Quiz/Index'
import Navigation from './Navigation/Index'
import Api from './Api/Index'

class App extends Component {
  render() {
    return (
      <View>
        <Navigation />
      </View>
    )
  }
}

export default App