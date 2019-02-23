import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class Cpf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cpf: '',
      isValid: '',
      rawValue: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <TextInputMask
          ref={(ref) => this._cpfInputEl = ref}
          value={this.state.cpf}
          onChangeText={text => {
            this.setState({
              cpf: text,
              isValid: this._cpfInputEl.isValid(),
              rawValue: this._cpfInputEl.getRawValue()
            })
          }}
          type={'cpf'}
          style={textInputStype}
        />
        <Text>{`isValid: ${this.state.isValid}`}</Text>
        <Text>{`rawValue: ${this.state.rawValue}`}</Text>
      </View>
    )
  }
}