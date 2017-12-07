import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet } from 'react-native';

export default class Hero extends Component {
  render() {
    let pic = {
      uri: 'https://www.mountainphotography.com/images/640/20130608-Alpenglow-on-Mt.-Sneffels.jpg'
    };
    return (
      <View>
        <Text style={styles.bigblue} >HIKE</Text>
        <Image source={pic} style={{width: 390, height: 310}}/>
        {/* <View>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        </View> */}
        <View>
          <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, height: 150, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});