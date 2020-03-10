import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { EditModal } from '../components/EditModal/EditModal';

export const TodoScreen = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handlerSave = inputText => {
    props.updateTodo(props.activeIdTodo, inputText);
    setShowModal(false);
  };
  const handlerCancel = () => {
    setShowModal(false);
  };

  return (
    <View>
      {showModal &&
        <EditModal showModal={showModal}
          inputText={props.inputText}
          save={handlerSave}
          cancel={handlerCancel} />}
      <TextInput value={props.inputText} />
      <View style={styles.buttons}>
        <Button title='Edit'
          onPress={() => setShowModal(true)} />
        <Button title='Back'
          onPress={() => props.closeTodo()} />
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
