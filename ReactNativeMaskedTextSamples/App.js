import React from 'react';
import { StyleSheet, View } from 'react-native';

import Cpf from './Samples/Cpf'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Cpf />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
});
