import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button, TextInput, Alert } from 'react-native';
import ProduceItem from '../../components/ProduceItems';
import axios from 'axios';

const produceData = [
  {
    id: 1,
    name: 'Apple',
    price: '$1.99',
    description: 'Organic Honeycrisp Apple',
    image: 'https://via.placeholder.com/150',
  },
  // Add more produce items here
];

const HomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fp0t4ny3l2.execute-api.us-east-1.amazonaws.com/users', {
        username: username,
        password: password,
      });

      setIsLoggedIn(true);
      Alert.alert('Success', response.data.message);
    } catch (error) {
      Alert.alert('Error', 'Login failed');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={produceData}
        renderItem={({ item }) => <ProduceItem produce={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {!isLoggedIn && (
        <View style={styles.authContainer}>
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
          <Button title="Login" onPress={handleLogin} />
          <Button title="Register" onPress={handleRegister} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
