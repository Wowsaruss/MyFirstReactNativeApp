import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <ScrollView>
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to details"
      />
    </View>
  </ScrollView>
);

const DetailsScreen = ({ navigation }) => (
  <ScrollView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View>
      <Text>Details Screen</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to home"
      />
    </View>
  </ScrollView>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        headerTitle: 'Home'
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
        headerTitle: 'Details'
    }
  },
});

export default RootNavigator;