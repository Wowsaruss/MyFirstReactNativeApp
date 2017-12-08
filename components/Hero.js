import React, { Component } from 'react';
import { AppRegistry, ImageBackground, View, ScrollView, Text, StyleSheet } from 'react-native';

export default class Hero extends Component {
  render() {
    let pic = {
      uri: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?dpr=1&auto=format&fit=crop&w=376&h=564&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    };
    return (
      <ScrollView>
        <View >
          <ImageBackground 
            source={pic}
            style={{width: 420, height: 740}}
          />
          <Text style={styles.heroText} >HIKE</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  heroText: {
    backgroundColor: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 130,
    position: 'absolute',
    left: 70,
    top: 100,
  },
});