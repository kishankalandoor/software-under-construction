import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const ActivityIndicatorExample = () => {
   return (
      <View>
         <ActivityIndicator />
         <ActivityIndicator size = "large"/>
         <ActivityIndicator size = "small" color = "#0000ff"/>
         <ActivityIndicator size = "large" color = "#00ff00"/>
      </View>
   )
}
export default ActivityIndicatorExample
