import React from 'react'
import { View, Text } from 'react-native'
import TextInputMask from '../lib/text-input-mask'

import { textInputStype, container } from './styles'

export default class WithRawValueInChangeText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      raw: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>With raw value in change text</Text>
        <TextInputMask
          type={'cpf'}
          value={this.state.value}
          includeRawValueInChangeText={true}
          onChangeText={(text, rawValue) => {
            this.setState({
              value: text,
              raw: rawValue
            })
          }}
          style={textInputStype}
        />
        <Text>Value: {this.state.value}</Text>
        <Text>Raw: {this.state.raw}</Text>
      </View>
    )
  }
}