import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 2000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.blinking}>
            <Blink text='I love YOU!' />
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  blinking: {
    fontSize: 40,
  }
})