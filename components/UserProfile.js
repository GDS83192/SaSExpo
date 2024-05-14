import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image URL
        style={styles.avatar}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.email}>john.doe@example.com</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Posts</Text>
          <Text style={styles.infoValue}>10</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Followers</Text>
          <Text style={styles.infoValue}>100</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Following</Text>
          <Text style={styles.infoValue}>50</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginTop: 20,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
});

export default UserProfile;
