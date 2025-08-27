import React from 'react';
import { Button, View, Alert } from 'react-native';

const ButtonBasics = () => {
  const _onPressButton = () => {
    Alert.alert('You tapped the button!')
  }

  return (
    <View>
      <Button
        onPress={_onPressButton}
        title="Press Me"
      />
    </View>
  );
}

export default ButtonBasics;
