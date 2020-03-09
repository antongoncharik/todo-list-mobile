import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const AddTodo = (props) => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.containerBlock}>
      <TextInput style={styles.input}
        placeholder='Enter item'
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
      <Button style={styles.button}
        title='Add item'
        onPress={() => {
          if (!inputText.trim()) return;
          props.addTodo({ title: inputText, id: Date.now(), });
          setInputText('');
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
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
