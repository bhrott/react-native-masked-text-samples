import React from 'react'
import { View, Text } from 'react-native'
import TextInputMask from '../lib/text-input-mask'

import { textInputStype, container } from './styles'

export default class Cpf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cpf: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>CPF</Text>
        <TextInputMask
          type={'cpf'}
          value={this.state.cpf}
          onChangeText={text => {
            this.setState({
              cpf: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}