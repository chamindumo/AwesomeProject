import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'; // You can use TouchableOpacity for buttons
import axios from 'axios';


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        username: '',
        password: '',
      },
      errorMessage: '',
      successMessage: '',
      userDetails: null,
    };
  }
  



  async login() {
    const { username, password } = this.state.loginForm;

    try {
      // Replace this with your React Native API call using axios or fetch
      const response = await axios.post(`https://localhost:7141/Users/${username}/${password}`, {
        username,
        password,
      });
      if (response.status === 200) {
        console.log('Login successful');
        this.props.navigation.navigate('Profile',{data:this.state.loginForm}); // Use navigation to move to the Home screen
        this.setState({ successMessage: 'Login successful', errorMessage: '' });
        console.log(data)
        
        // Dispatch login action if you're using Redux
      } else if (response.status === 404) {
        console.log('Login failed');
        this.setState({
          errorMessage: 'Login failed. Please check your credentials.',
          successMessage: '',
        });
        // Handle login attempts if needed
      }
    } catch (error) {
      console.error('An error occurred:', error);
      this.setState({ errorMessage: 'An error occurred while trying to log in.' });
    }
  }

  goToSignUp() {
    this.props.navigation.navigate('Signup'); // Use navigation to move to the Sign Up screen
  }
  

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text>Login</Text>
        <View>
          {/* User details section */}
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={(text) => this.setState({ loginForm: { ...this.state.loginForm, username: text } })}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ loginForm: { ...this.state.loginForm, password: text } })}
          />
          <Button title="Login" onPress={() => this.login()} />
          <TouchableOpacity onPress={() => this.goToSignUp()}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          {/* Add Google and GitHub login buttons */}
        </View>
        <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        <Text style={{ color: 'green' }}>{this.state.successMessage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;
