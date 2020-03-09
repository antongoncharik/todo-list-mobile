import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const TodoScreen = (props) => {
  const [inputText, setInputText] = useState(props.inputText);

  return (
    <View>
      <TextInput value={inputText}
        onChangeText={text => setInputText(text)} />
      <View>
        <Button title='Save' />
        <Button title='Cancel' />
      </View>
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
