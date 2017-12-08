import React, { Component } from 'react';
import { AppRegistry, View, ScrollView } from 'react-native';

export default class Positioning extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{flex: 2, height: 246, backgroundColor: 'powderblue'}} />
          <View style={{flex: 3, height: 246, backgroundColor: 'skyblue'}} />
          <View style={{flex: 4, height: 246, backgroundColor: 'steelblue'}} />
        </View>
      </ScrollView>
    );
  }
}