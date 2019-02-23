import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class MyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      phoneBR: '',
      phoneBRWithoutDDD: '',
      phoneBRWithCustomDDD: '',
      international: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <View style={container}>
          <Text>Cel Phone: BR</Text>
          <TextInputMask
            type={'cel-phone'}
            value={this.state.phoneBR}
            onChangeText={text => {
              this.setState({
                phoneBR: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Cel Phone: BR without ddd</Text>
          <TextInputMask
            type={'cel-phone'}
            options={{
              withDDD: false
            }}
            value={this.state.phoneBRWithoutDDD}
            onChangeText={text => {
              this.setState({
                phoneBRWithoutDDD: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Cel Phone: BR with custom ddd</Text>
          <TextInputMask
            type={'cel-phone'}
            options={{
              dddMask: '+99 99 '
            }}
            value={this.state.phoneBRWithCustomDDD}
            onChangeText={text => {
              this.setState({
                phoneBRWithCustomDDD: text
              })
            }}
            style={textInputStype}
          />
        </View>
        <View style={container}>
          <Text>Cel Phone: International</Text>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'INTERNATIONAL'
            }}
            value={this.state.international}
            onChangeText={text => {
              this.setState({
                international: text
              })
            }}
            style={textInputStype}
          />
        </View>
      </View>
    )
  }
}