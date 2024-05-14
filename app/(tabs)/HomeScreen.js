import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import ProduceItem from '../../components/ProduceItems';

const produceData = [
  {
    id: 1,
    name: 'Apple',
    price: '$1.99',
    description: 'Organic Honeycrisp Apple',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  // Add more produce items here
];

const HomeScreen = ({ navigation }) => {
  const isLoggedIn = false; // Set this based on authentication state

  const handleLogin = () => {
    // Navigate to login screen
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    // Navigate to register screen
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
        <View style={styles.authButtonsContainer}>
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
  authButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default HomeScreen;
