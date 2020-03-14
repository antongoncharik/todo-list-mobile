import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { THEME } from '../../constants/theme';

export const Navbar = (props) => {
  return (
    <View style={styles.navbarBlock}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarBlock: {
    height: 50,
    backgroundColor: THEME.BROWN,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
