import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { UiTextRegular } from '../components/UI/UiTextRegular';
import { EditModal } from '../components/EditModal/EditModal';
import { COLOR, PADDING, MARGIN, BORDER } from '../constants/theme';
import { UiButton } from './../components/UI/UiButton';

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
          <UiButton onPress={() => props.deleteTodo(props.activeIdTodo)}>
            <AntDesign name="delete"
              size={32}
              color={COLOR.ORANGE_DARK} />
            <UiTextRegular style={{ fontSize: 12 }}>Delete</UiTextRegular>
          </UiButton>
        </View>
        <View style={styles.buttonBlock}>
          <UiButton onPress={() => setShowModal(true)}>
            <AntDesign name="edit"
              size={32}
              color={COLOR.GREEN} />
            <UiTextRegular style={{ fontSize: 12 }}>Edit</UiTextRegular>
          </UiButton>
        </View>
        <View style={styles.buttonBlock}>
          <UiButton onPress={() => props.closeTodo()}>
            <AntDesign name="back"
              size={32}
              color={COLOR.GREY} />
            <UiTextRegular style={{ fontSize: 12 }}>Back</UiTextRegular>
          </UiButton>
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
