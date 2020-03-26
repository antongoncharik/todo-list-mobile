import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { UiTextRegular } from './UiTextRegular';

export const UiButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}
      activeOpacity={0.7}>
      <View style={{ ...styles.default }}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {

  },
});
