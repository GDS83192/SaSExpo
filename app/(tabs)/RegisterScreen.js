import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/RegisterScreenStyles'; // Import styles from the styles module

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Send registration request to the backend
      const response = await axios.post('https://mkj79spgg4.execute-api.us-east-1.amazonaws.com/users', {
        username: username,
        password: password,
      });

      // Handle successful registration
      Alert.alert('Success', response.data.message);
    } catch (error) {
      // Handle registration failure
      if (error.response) {
        // Server responded with a status code
        Alert.alert('Error', error.response.data.message);
      } else if (error.request) {
        // Request was made but no response was received
        Alert.alert('Error', 'Network Error');
      } else {
        // Something else happened in setting up the request
        Alert.alert('Error', 'Unknown Error');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry // Hide the entered text
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;