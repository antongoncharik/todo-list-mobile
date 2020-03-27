import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { Navbar } from './src/components/Navbar/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { COLOR } from './src/constants/theme';

const LoadApp = async () => {
  await Font.loadAsync({
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    robotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

export default function App() {
  const [todos, setTodos] = useState([]);
  const [activeIdTodo, setActivedIdTodo] = useState(null);
  const [activeTodo, setActiveTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlerAddTodo = (todo) => {
    setTodos(prevState => [...prevState, todo]);
  };
  const handlerDeleteTodo = (id) => {
    const title = `${todos.find(item => item.id === id).title.slice(0, 30)}...`;
    Alert.alert(
      'Delet item',
      `Do you really want to delete item "${title}"?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setTodos(prevState => prevState.filter(item => item.id !== id));
            setActivedIdTodo(null);
          }
        },
      ],
      { cancelable: false },
    );
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
    setActivedIdTodo(id);
    setActiveTodo(todos.find(item => item.id === id));
  };
  const handlerCloseTodo = () => {
    setActivedIdTodo(null);
  };

  let screen = (<MainScreen todos={todos}
    addTodo={handlerAddTodo}
    deleteTodo={handlerDeleteTodo}
    openTodo={handlerOpenTodo} />);

  if (activeIdTodo) {
    screen = (<TodoScreen inputText={activeTodo.title}
      updateTodo={handlerUpdateTodo}
      closeTodo={handlerCloseTodo}
      deleteTodo={handlerDeleteTodo}
      activeIdTodo={activeIdTodo} />);
  }

  if (!isLoading) {
    return <AppLoading startAsync={LoadApp}
      onError={error => console.log(error)}
      onFinish={() => setIsLoading(true)} />
  }

  return (
    <View>
      <Navbar title='Todo list' />
      <View style={styles.containerBlock}>{screen}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBlock: {
    backgroundColor: COLOR.ORANGE_LIGHT,
    height: '100%',
  },
});
