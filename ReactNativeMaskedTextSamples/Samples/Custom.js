import React from 'react'
import { View, Text } from 'react-native'
import TextInputMask from '../lib/text-input-mask'

import { textInputStype, container } from './styles'

export default class Custom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      custom1: '',
      custom2: '',
      custom3: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <View style={container}>
          <Text>Custom: 999 AAA SSS ***</Text>
          <TextInputMask
            type={'custom'}
            options={{
              mask: '999 AAA SSS ***'
            }}
            value={this.state.custom1}
            onChangeText={text => {
              this.setState({
                custom1: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Custom: 999 (99) 999 99 99</Text>
          <TextInputMask
            type={'custom'}
            options={{
              mask: '999 (99) 999 99 99'
            }}
            value={this.state.custom2}
            onChangeText={text => {
              this.setState({
                custom2: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Custom: AA-99-99-99-A</Text>
          <TextInputMask
            id='custom-AA-99-99-99-A'
            type={'custom'}
            options={{
              mask: 'AA-99-99-99-A'
            }}
            value={this.state.custom3}
            onChangeText={text => {
              this.setState({
                custom3: text
              })
            }}
            style={textInputStype}
          />
        </View>
      </View>
    )
  }
}