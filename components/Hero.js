import React, { Component } from 'react';
import { AppRegistry, Image, View, ScrollView, Text, StyleSheet } from 'react-native';

export default class Hero extends Component {
  render() {
    let pic = {
      uri: 'https://www.mountainphotography.com/images/640/20130608-Alpenglow-on-Mt.-Sneffels.jpg'
    };
    return (
      <ScrollView>
        <Text style={styles.heroText} >HIKE</Text>
        <Image source={pic} style={{flex: 1, height: 310}}/>
        <View>
          <View style={{flex: 2, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{flex: 3, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{flex: 4, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  heroText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 80,
  },
});