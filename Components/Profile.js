import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Button, Image, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

function SecondScreen() {
  const [profile, setProfile] = useState({});
  const route = useRoute();
  const receivedData = route.params?.data;

  useEffect(() => {
    sendData();
  }, []);

  const sendData = () => {
    const userName = receivedData.username;

    axios
      .get(`https://localhost:7141/UsersInformation?username=${userName}`)
      .then((response) => {
        setProfile(response.data || {});
      })
      .catch((error) => {
        console.error('Error fetching', error);
      });
  };
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user session, navigate to login screen, etc.
    navigation.navigate('Login'); // Navigate to the login screen
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>

      <Text style={styles.firstname}>{profile.firstName}</Text>
      <Text style={styles.lastname}>{profile.lastName}</Text>
      <Text style={styles.email}>{profile.email}</Text>
    </View>
    <Button title="Logout" onPress={handleLogout} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    borderColor: '#EFEFEF',
    backgroundColor: 'white',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  firstname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  lastname: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SecondScreen;
