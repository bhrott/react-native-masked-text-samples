import React from 'react'
import { View, Text } from 'react-native'
import TextInputMask from '../lib/text-input-mask'

import { textInputStype, container } from './styles'

export default class CreditCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visamaster: '',
      amex: '',
      diners: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <View style={container}>
          <Text>Credit Card: Visa or Master</Text>
          <TextInputMask
            type={'credit-card'}
            options={{
              obfuscated: false,
              issuer: 'visa-or-mastercard'
            }}
            value={this.state.visamaster}
            onChangeText={text => {
              this.setState({
                visamaster: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Credit Card: Amex</Text>
          <TextInputMask
            type={'credit-card'}
            options={{
              obfuscated: false,
              issuer: 'amex'
            }}
            value={this.state.amex}
            onChangeText={text => {
              this.setState({
                amex: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Credit Card: Diners</Text>
          <TextInputMask
            type={'credit-card'}
            options={{
              obfuscated: false,
              issuer: 'diners'
            }}
            value={this.state.diners}
            onChangeText={text => {
              this.setState({
                diners: text
              })
            }}
            style={textInputStype}
          />
        </View>
      </View>
    )
  }
}