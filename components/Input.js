import React, { Component } from 'react';
import { Alert, AppRegistry, View, ScrollView, Text, StyleSheet, TextInput, Button, TouchableHighlight, FlatList } from 'react-native';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
      }
      _onPressButton() {
        Alert.alert('Button has been pressed')
      }

  render() {
    return (
      <ScrollView>
        <View>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
            />
            <Button
                onPress={this._onPressButton}
                title="Press Me"
            />
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>BUTTON</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.container}>
                <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white',
      fontSize: 20
    }
  })