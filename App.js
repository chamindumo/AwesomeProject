import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoggingAndSigninButtons from './Components/LoggingAndSigninButtons.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Home from './Components/Home.js';
import Profile from './Components/Profile.js'
import Products from './Components/Products.js'
import AllProducts from './Components/AllProducts.js'
import AddProducts from './Components/AddProducts.js'
import AddBook from './Components/AddBook.js'
import BookDisplay from './Components/BookDisplay.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoggingAndSigninButtons} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Homepage" component={Home} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Products" component={Products}/>
        <Stack.Screen name="AllProducts" component={AllProducts}/>
        <Stack.Screen name="AddProducts" component={AddProducts}/>
        <Stack.Screen name="AddBook" component={AddBook}/>
        <Stack.Screen name="BookDisplay" component={BookDisplay}/>




      </Stack.Navigator>
    </NavigationContainer>
  );
}
