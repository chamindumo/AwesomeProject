import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const navigateToLogging = () => {
    navigation.navigate('Login');
  };
  const navigationtosignin = () => {
    navigation.navigate('Signup');
  };
  const navigateToPRoduts = () => {
    navigation.navigate('Products');
  };
  const navigateToAllProducts = () => {
    navigation.navigate('AllProducts');
  };
  const navigateToAddProduts = () => {
    navigation.navigate('AddProducts');
  };
  const navigateToAddBook = () => {
    navigation.navigate('AddBook');
  };

  const navigateToBookDisplay = () => {
    navigation.navigate('BookDisplay');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to KIWISUIT</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={navigateToLogging} color="#FF5733" />
        <Button title="Sign In" onPress={navigationtosignin} color="#33FF57" />
        <Button title="View Products" onPress={navigateToPRoduts} color="#3377FF" />
        <Button title="All Products" onPress={navigateToAllProducts} color="#FF33F6" />
        <Button title="Add Products" onPress={navigateToAddProduts} color="#FFB933" />
        <Button title="Add a Book" onPress={navigateToAddBook} color="#33FFFF" />
        <Button title="Book Display" onPress={navigateToBookDisplay} color="#597FFF" />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20, // Add spacing below the title
    color: '#333', // Text color
    textTransform: 'uppercase', // Uppercase the text
  },
  buttonContainer: {
    marginTop: 20, // Add spacing above the buttons
  },
});
