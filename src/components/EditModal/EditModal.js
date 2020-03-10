import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Modal, Button } from 'react-native';

export const EditModal = (props) => {
  const [inputText, setInputText] = useState(props.inputText);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.showModal} >
      <TextInput value={inputText}
        onChangeText={text => setInputText(text)} />
      <View style={styles.buttons}>
        <Button title='Save'
          onPress={() => props.save(inputText)} />
        <Button title='Cancel'
          onPress={() => props.cancel()} />
      </View>
    </Modal>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
});
