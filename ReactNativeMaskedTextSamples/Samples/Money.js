import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class MyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      simple: '',
      advanced: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <View style={container}>
          <Text>Money: Simple</Text>
          <TextInputMask
            type={'money'}
            value={this.state.simple}
            onChangeText={text => {
              this.setState({
                simple: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Money: Advanced</Text>
          <TextInputMask
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: ''
            }}
            value={this.state.advanced}
            onChangeText={text => {
              this.setState({
                advanced: text
              })
            }}
            style={textInputStype}
          />
        </View>
      </View>
    )
  }
}