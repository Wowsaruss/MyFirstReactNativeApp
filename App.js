import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Hero from './components/Hero';
import LotsOfGreetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';
import Input from './components/Input';
import Networking from './components/Networking';
import Positioning from './components/Positioning';
import StackNavigator from './components/StackNavigator';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.bodyColor}>
        <View>
          <Hero/>
          <Positioning/>
          <Input/>
          <LotsOfGreetings/>
          <BlinkApp/>
          <StackNavigator/>
          <Networking/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bodyColor: {
    backgroundColor: '#fff',
  },
});
