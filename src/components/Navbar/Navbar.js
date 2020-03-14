import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { UiTextBold } from '../UI/UiTextBold';;
import { COLOR } from '../../constants/theme';

export const Navbar = (props) => {
  return (
    <View style={styles.navbarBlock}>
      <UiTextBold style={styles.text}>{props.title}</UiTextBold>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarBlock: {
    height: 50,
    backgroundColor: COLOR.BROWN,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
