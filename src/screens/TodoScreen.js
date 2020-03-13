import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { EditModal } from '../components/EditModal/EditModal';
import { THEME } from '../constants/theme';

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
    <View style={styles.containerBlock}>
      {showModal &&
        <EditModal showModal={showModal}
          inputText={props.inputText}
          save={handlerSave}
          cancel={handlerCancel} />}
      <View style={styles.textBlock}>
        <Text style={styles.text}>{props.inputText}</Text>
      </View>
      <View style={styles.buttonsBlock}>
        <View style={styles.buttonBlock}>
          <Button title='Delete'
            color={THEME.RED}
            onPress={() => props.deleteTodo(props.activeIdTodo)} />
        </View>
        <View style={styles.buttonBlock}>
          <Button title='Edit'
            color={THEME.GREEN}
            onPress={() => setShowModal(true)} />
        </View>
        <View style={styles.buttonBlock}>
          <Button title='Back'
            color={THEME.GREY}
            onPress={() => props.closeTodo()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlock: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  textBlock: {
    backgroundColor: THEME.ORANGE,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    // shadowColor: '#000',
    // shadowRadius: 5,
    // shadowOpacity: 0.5,
    // shadowOffset: {width: 2, height: 2},
    elevation: 8,
  },
  text: {
    fontSize: 18,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  buttonBlock: {
    width: '30%',
  },
});
