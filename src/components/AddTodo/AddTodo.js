import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Keyboard, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { COLOR, MARGIN } from '../../constants/theme';
import { Alert1 } from '../../components/Alert/Alert';
import { UiButton } from './../UI/UiButton';
import { UiTextRegular } from './../UI/UiTextRegular';

export const AddTodo = (props) => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.containerBlock}>
      <TextInput style={styles.input}
        placeholder='Enter item'
        placeholderTextColor={COLOR.GREY}
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
      <UiButton onPress={() => {
        if (!inputText.trim()) return;
        props.addTodo({ title: inputText, id: Date.now(), });
        setInputText('');
        // Keyboard.dismiss();
      }}>
        <AntDesign name="pluscircleo"
          size={32}
          color={COLOR.GREEN} />
        <UiTextRegular style={{ fontSize: 12 }}>Add</UiTextRegular>
      </UiButton>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: MARGIN.top,
    marginBottom: MARGIN.bottom,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR.BROWN,
    width: Dimensions.get('window').width / 3,
    fontSize: 18,
  },
});
