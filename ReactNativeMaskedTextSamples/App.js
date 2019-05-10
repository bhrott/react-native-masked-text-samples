import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Cpf from './Samples/Cpf'
import CreditCard from './Samples/CreditCard'
import Cnpj from './Samples/Cnpj'
import CelPhone from './Samples/CelPhone'
import Custom from './Samples/Custom'
import Datetime from './Samples/Datetime'
import Money from './Samples/Money'
import OnlyNumbers from './Samples/OnlyNumbers'
import ZipCode from './Samples/ZipCode'
import WithRawValueInChangeText from './Samples/WithRawValueInChangeText'
import FocusingNextInput from './Samples/FocusingNextInput'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Cpf />
          <Cnpj />
          <CreditCard />
          <CelPhone />
          <Custom />
          <Datetime />
          <Money />
          <OnlyNumbers />
          <ZipCode />
          <WithRawValueInChangeText />
          <FocusingNextInput />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 50
  },
  scrollView: {
    flex: 1
  }
});
