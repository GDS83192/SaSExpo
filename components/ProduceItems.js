import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProduceItem = ({ produce }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: produce.image }} // Assuming you have an image URL in your produce data
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{produce.name}</Text>
        <Text style={styles.price}>{produce.price}</Text>
        <Text style={styles.description}>{produce.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProduceItem;
