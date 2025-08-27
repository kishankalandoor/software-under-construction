import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text>Some text</Text>
      <Text>Some more text</Text>
    </View>
  );
};

export default LotsOfStyles;
