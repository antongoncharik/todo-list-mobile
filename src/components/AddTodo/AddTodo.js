import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const AddTodo = (props) => {
  return (
    <View style={styles.containerBlock}>
      <TextInput style={styles.input} placeholder={props.placeholder} />
      <Button style={styles.button} title={props.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#1ab8ed',
    width: '70%',
    fontSize: 18,
  },
  button: {

  },
});
