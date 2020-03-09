import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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
    height: 50,
    backgroundColor: '#1ab8ed',
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,

  },
  textBlock: {
    fontSize: 24,
  }
});