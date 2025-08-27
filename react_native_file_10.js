import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Image
        style={styles.logo}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAE0lEQVR42mNkGAYAlD3A/AMAAAT3A/3c/wAAAABJRU5ErkJggg=='}}
      />
    </View>
  );
}

export default DisplayAnImage;
