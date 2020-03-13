import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo/AddTodo';
import { Todo } from '../components/Todo/Todo';

export const MainScreen = (props) => {
  return (
    <View style={styles.containerBlock}>
      <AddTodo addTodo={props.addTodo} />
      <FlatList
        data={props.todos}
        renderItem={({ item }) => <Todo title={item.title}
          id={item.id}
          deleteTodo={props.deleteTodo}
          openTodo={props.openTodo} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlock: {
    marginHorizontal: 10,
  }
});