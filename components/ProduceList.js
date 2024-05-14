import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProduceItem from './ProduceItems';

const ProduceList = ({ produceData }) => {
  return (
    <View>
      <FlatList
        data={produceData}
        renderItem={({ item }) => <ProduceItem produce={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProduceList;