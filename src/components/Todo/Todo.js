import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {THEME} from '../../constants/theme';

export const Todo = (props) => {
  return (
    <TouchableOpacity onPress={() => props.openTodo(props.id)}
      onLongPress={() => props.deleteTodo(props.id)}>
      <View style={styles.todoBlock}>
        <Text style={styles.textBlock}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoBlock: {
    minHeight: 50,
    backgroundColor: THEME.ORANGE,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  textBlock: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});