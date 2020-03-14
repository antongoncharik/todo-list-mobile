import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo/AddTodo';
import { Todo } from '../components/Todo/Todo';

export const MainScreen = (props) => {
  return (
    <View style={styles.containerBlock}>
      <AddTodo addTodo={props.addTodo} />
      {!props.todos.length &&
        <View style={styles.imageBlock}>
          <Image
            style={styles.image}
            source={require('../../assets/notepad.png')}
          />
        </View>}
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
  },
  imageBlock: {
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
  },
});