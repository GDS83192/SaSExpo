import React from 'react';
import { View, Text } from 'react-native';
import ProduceList from '../../components/ProduceList';

const ProduceDetailsScreen = () => {
  return (
    <View>
      <Text>Produce Details</Text>
      <ProduceList />
      {/* Add produce details here */}
    </View>
  );
};

export default ProduceDetailsScreen;