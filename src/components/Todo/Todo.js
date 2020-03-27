import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { UiTextRegular } from '../../components/UI/UiTextRegular';
import { COLOR, PADDING, BORDER } from '../../constants/theme';

export const Todo = (props) => {
  return (
    <TouchableOpacity onPress={() => props.openTodo(props.id)}
      onLongPress={() => props.deleteTodo(props.id)} 
      activeOpacity={0.7}>
      <View style={styles.todoBlock}>
        <UiTextRegular style={styles.textBlock}>{props.title}</UiTextRegular>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoBlock: {
    minHeight: 50,
    backgroundColor: COLOR.ORANGE,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: BORDER.radius,
  },
  textBlock: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
});