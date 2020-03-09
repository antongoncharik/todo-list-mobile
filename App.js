import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [openedIdTodo, setOpenedIdTodo] = useState(null);

  const handlerAddTodo = (todo) => {
    setTodos(prevState => [...prevState, todo]);
  };
  const handlerDeleteTodo = (id) => {
    setTodos(prevState => prevState.filter(item => item.id !== id));
  };
  const handlerUpdateTodo = (id, text) => {
    setTodos(prevState => prevState.map(item => {
      if (item.id === id) {
        item.title = text;
      }
      return item;
    })
    )
  };
  const handlerOpenTodo = (id) => {
    setOpenedIdTodo(id);
  };

  let screen = (<MainScreen todos={todos}
    addTodo={handlerAddTodo}
    deleteTodo={handlerDeleteTodo}
    openTodo={handlerOpenTodo} />);

  if (openedIdTodo) {
    screen = (<TodoScreen inputText={'efsfe'}
      updateTodo={handlerUpdateTodo} />);
  }

  return (
    <View>
      <Navbar title='Todo list' />
      <View>{screen}</View>
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
