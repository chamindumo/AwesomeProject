import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

class AddBookScrean extends Component{

    state={
        bookForm:{
            id: '',
            name: '',
            author: '',
            },
            error:null
         };
    

    async addBook(){
        try{
            if(!this.state.bookForm.id || !this.state.bookForm.name){
                throw new Error("Book Id and Book name required.")
            }

            const response = await axios.post(
                'https://localhost:7141/Add/Book',
                this.state.bookForm
            );
            console.log("Book Added", response.data);

            
        }catch(error){
        console.error('Error',error.message);
        this.setState({error: error.message})
        }
    }

    render(){
        return(
<View style={styles.addProductContainer}>
        <Text>Add Product</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Book ID"
            onChangeText={(text) =>
              this.setState({
                bookForm: { ...this.state.bookForm, id: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Title"
            onChangeText={(text) =>
              this.setState({
                bookForm: { ...this.state.bookForm, name: text },
              })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Author"
            onChangeText={(text) =>
              this.setState({
                bookForm: { ...this.state.bookForm, author: text },
              })
            }
          />

        <Button title="Add Book" onPress={() => this.addBook()} />
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
  
  export default AddBookScrean;
  