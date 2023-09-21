import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupForm: {
        username: '',
        passwordHash: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        region: '',
      },
    };
  }

  async signup() {
    try {
      // Check if username already exists (You may need to implement this logic)
      // ...

      // Perform the registration (You need to implement this logic)
      // ...

      
      
        const response = await axios.post('https://localhost:7141/Register', this.state.signupForm);
        console.log('User registered:', response.data);

      // Clear form data and redirect (Change the redirection path as needed)
      this.setState({
        signupForm: {
          username: '',
          passwordHash: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          region: '',
        },
      });

      // Redirect to the login or home screen
      this.props.navigation.navigate('Login'); // or 'Home' depending on your routes
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error (show error message, etc.)
    }
  }

  render() {
    return (
      <View style={styles.signupContainer}>
        <Text>Sign Up</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={(text) =>
              this.setState({
                signupForm: { ...this.state.signupForm, username: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) =>
              this.setState({
                signupForm: { ...this.state.signupForm, passwordHash: text },
              })
            }
          />



        <TextInput
          style={styles.input}
          placeholder="Email"
          secureTextEntry={true}
          onChangeText={(text) =>this.setState({
            signupForm: { ...this.state.signupForm, email: text },
          })
          } />
        <TextInput
          style={styles.input}
          placeholder="Firstname"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({
            signupForm: { ...this.state.signupForm, firstName: text },
          })} />
        <TextInput
          style={styles.input}
          placeholder="Lastname"
          secureTextEntry={true}
          onChangeText={(text) =>this.setState({
            signupForm: { ...this.state.signupForm, lastName: text },
          })} />
        <TextInput
          style={styles.input}
          placeholder="Address"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({
            signupForm: { ...this.state.signupForm, address: text },
          })} />
        <TextInput
          style={styles.input}
          placeholder="City"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({
            signupForm: { ...this.state.signupForm, city: text },
          })} />
        <TextInput
          style={styles.input}
          placeholder="Region"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({
            signupForm: { ...this.state.signupForm, region: text },
          })} />
          {/* Add similar TextInput components for other form fields */}
          <Button title="Sign Up" onPress={() => this.signup()} />
          <Button
            title="Already have an account"
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signupContainer: {
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

export default SignUpScreen;
