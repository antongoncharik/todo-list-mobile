import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/components/Navbar/Navbar';
import { AddTodo } from './src/components/AddTodo/AddTodo';

export default function App() {
  return (
    <View>
      <Navbar title='Todo list' />
      <AddTodo title='Add event'
        placeholder='Enter event' />
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
