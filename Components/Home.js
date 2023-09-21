import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>KIWISUIT</Text>
        <Button
          title="Logout"
          onPress={() => {
            // Implement logout logic or navigate to the login screen
            // For example, you can navigate to the login screen if using React Navigation:
            this.props.navigation.navigate('Login');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
