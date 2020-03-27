import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

export const UiButton = (props) => {
  const WrapperOpacity = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <WrapperOpacity onPress={props.onPress}
      activeOpacity={0.7}>
      <View style={{ ...styles.default }}>
        {props.children}
      </View>
    </WrapperOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
