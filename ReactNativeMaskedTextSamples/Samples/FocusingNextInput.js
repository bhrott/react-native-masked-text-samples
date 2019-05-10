import React from 'react'
import { View, Text, TextInput } from 'react-native'
import TextInputMask from '../lib/text-input-mask'

import { textInputStype, container } from './styles'

export default class FocusingNextInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      cpf: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>Focusing next input</Text>
        <TextInput
          value={this.state.name}
          onChangeText={name => {
            this.setState({
              name
            })
          }}
          onSubmitEditing={() => {
            this._cpfRef.getElement().focus()
          }}
          style={textInputStype}
          placeholder='Name'
        />
        <TextInputMask
          ref={ref => this._cpfRef = ref}
          type={'cpf'}
          value={this.state.cpf}
          onChangeText={text => {
            this.setState({
              cpf: text
            })
          }}
          style={textInputStype}
          placeholder='Cpf'
        />
      </View>
    )
  }
}