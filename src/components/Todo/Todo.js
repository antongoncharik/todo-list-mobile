import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { UiTextRegular } from '../../components/UI/UiTextRegular';
import { COLOR, PADDING, MARGIN, BORDER } from '../../constants/theme';

export const Todo = (props) => {
  return (
    <TouchableOpacity onPress={() => props.openTodo(props.id)}
      onLongPress={() => props.deleteTodo(props.id)}>
      <View style={styles.todoBlock}>
        <UiTextRegular style={styles.textBlock}>{props.title}</UiTextRegular>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoBlock: {
    minHeight: 50,
    backgroundColor: COLOR.ORANGE,
    marginVertical: MARGIN.vertical,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: BORDER.radius,
  },
  textBlock: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
});