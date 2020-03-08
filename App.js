import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar/Navbar';
import { AddTodo } from './src/components/AddTodo/AddTodo';
import { Todo } from './src/components/Todo/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos(prevState => [...prevState, todo]);
  };
  const deleteTodo = (id) => {
    setTodos(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <View>
      <Navbar title='Todo list' />
      <AddTodo addTodo={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo title={item.title}
          id={item.id}
          deleteTodo={deleteTodo} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
