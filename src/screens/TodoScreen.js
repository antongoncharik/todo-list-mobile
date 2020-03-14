import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { UiTextRegular } from '../components/UI/UiTextRegular';
import { EditModal } from '../components/EditModal/EditModal';
import { COLOR, PADDING, MARGIN, BORDER } from '../constants/theme';

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
        <UiTextRegular>{props.inputText}</UiTextRegular>
      </View>
      <View style={styles.buttonsBlock}>
        <View style={styles.buttonBlock}>
          <Button title='Delete'
            color={COLOR.ORANGE_DARK}
            onPress={() => props.deleteTodo(props.activeIdTodo)} />
        </View>
        <View style={styles.buttonBlock}>
          <Button title='Edit'
            color={COLOR.GREEN}
            onPress={() => setShowModal(true)} />
        </View>
        <View style={styles.buttonBlock}>
          <Button title='Back'
            color={COLOR.GREY}
            onPress={() => props.closeTodo()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlock: {
    marginHorizontal: MARGIN.horizontal,
    alignItems: 'center',
  },
  textBlock: {
    backgroundColor: COLOR.ORANGE,
    borderRadius: BORDER.radius,
    width: '100%',
    marginTop: MARGIN.top,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    elevation: 8,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: MARGIN.top,
    width: '100%',
  },
  buttonBlock: {
    width: '30%',
  },
});
