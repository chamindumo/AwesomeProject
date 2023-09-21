import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

class AddProductScreen extends Component {
  
    state = {
      productForm: {
        Id: '',
        Names: '',
        Descriptions: '',
        price: '',
        isAvailable: '',
        expirDate: '',
        ImageData: '',
      },
      error: null, // For displaying error messages
    };
  

  async addProduct() {
    try {
      // Client-side validation (you can add more validation checks)
      if (!this.state.productForm.Id || !this.state.productForm.Names) {
        throw new Error('Product ID and Name are required.');
      }

      const response = await axios.post(
        'https://localhost:7141/Add/product/', // Replace with your backend API endpoint
        this.state.productForm
      );

      // Handle successful product addition (you can add redirection logic)
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <View style={styles.addProductContainer}>
        <Text>Add Product</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Product ID"
            onChangeText={(text) =>
              this.setState({
                productForm: { ...this.state.productForm, Id: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            onChangeText={(text) =>
              this.setState({
                productForm: { ...this.state.productForm, Names: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            onChangeText={(text) =>
              this.setState({
                productForm: { ...this.state.productForm, Descriptions: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            onChangeText={(text) =>
              this.setState({
                productForm: { ...this.state.productForm, price: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Is Available"
            onChangeText={(text) =>
              this.setState({
                productForm: { ...this.state.productForm, isAvailable: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Expiration Date"
            onChangeText={(text) =>
              this.setState({
                productForm: { ...this.state.productForm, expirDate: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Image Data"
            onChangeText={(text) =>
              this.setState({
                productForm: { ...this.state.productForm, ImageData: text },
              })
            }
          />

          {/* Add similar TextInput components for other form fields */}
          <Button title="Add Product" onPress={() => this.addProduct()} />
          <Button
            title="Back to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />

          {/* Display error message */}
          {this.state.error && <Text style={styles.error}>{this.state.error}</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addProductContainer: {
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
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default AddProductScreen;
