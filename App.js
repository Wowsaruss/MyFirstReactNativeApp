import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Hero from './components/Hero';
import LotsOfGreetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Hero/>
        <LotsOfGreetings/>
        <BlinkApp/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
});
