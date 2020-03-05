import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#1ab8ed',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
