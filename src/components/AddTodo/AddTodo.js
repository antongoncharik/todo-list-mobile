import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { THEME } from '../../constants/theme';
import { Alert1 } from '../../components/Alert/Alert';

export const AddTodo = (props) => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.containerBlock}>
      <TextInput style={styles.input}
        placeholder='Enter item'
        placeholderTextColor={THEME.GREY}
        value={inputText}
        onChangeText={text => {
          if (text.length > 300) {
            Alert.alert(
              'Warning',
              `Todo can not be more than 300 symbols.`,
              [
                {
                  text: 'OK',
                },
              ],
              { cancelable: false },
            )
            return;
          }
          setInputText(text);
        }}
      />
      <Button color={THEME.GREEN}
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
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: THEME.BROWN,
    width: '70%',
    fontSize: 18,
  },
});
