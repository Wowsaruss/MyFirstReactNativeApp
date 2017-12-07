import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <ScrollView>
        <Greeting name='Russell' />
        <Greeting name='Andrea' />
        <Greeting name='Porter' />
      </ScrollView>
    );
  }
}
