import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const UiTextBold = (props) => {
  return (
      <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'robotoBold',
    fontSize: 18,
  },
});
