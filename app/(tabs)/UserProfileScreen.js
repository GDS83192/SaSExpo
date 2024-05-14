import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserProfile from '../../components/UserProfile';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <UserProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default UserProfileScreen;