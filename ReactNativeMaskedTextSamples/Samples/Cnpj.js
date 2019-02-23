import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class MyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cnpj: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>CNPJ</Text>
        <TextInputMask
          type={'cnpj'}
          value={this.state.cnpj}
          onChangeText={text => {
            this.setState({
              cnpj: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}