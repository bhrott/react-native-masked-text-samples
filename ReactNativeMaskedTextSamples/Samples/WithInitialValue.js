import React from 'react'
import { View, Text } from 'react-native'
import TextInputMask from '../lib/text-input-mask'

import { textInputStype, container } from './styles'

export default class WithInitialValue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '12345678'
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>With initial value</Text>
        <TextInputMask
          type={'zip-code'}
          value={this.state.value}
          onChangeText={text => {
            this.setState({
              value: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}