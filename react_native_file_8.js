import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const FlexDirectionBasics = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
    </View>
  );
};

export default FlexDirectionBasics;
