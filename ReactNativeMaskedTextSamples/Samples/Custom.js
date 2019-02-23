import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class MyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>Custom: 999 AAA SSS ***</Text>
        <TextInputMask
          type={'custom'}
          options={{
            mask: '999 AAA SSS ***'
          }}
          value={this.state.text}
          onChangeText={text => {
            this.setState({
              text: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}