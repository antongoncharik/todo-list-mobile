import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Modal, Button, Alert } from 'react-native';

import { COLOR, PADDING, MARGIN } from '../../constants/theme';

export const EditModal = (props) => {
  const [inputText, setInputText] = useState(props.inputText);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.showModal} >
      <View style={styles.containerBlock}>
        <View style={styles.inputBlock}>
          <TextInput style={styles.input}
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
            }} />
        </View>
        <View style={styles.buttonsBlock}>
          <View style={styles.buttonBlock}>
            <Button title='Save'
              color={COLOR.GREEN}
              onPress={() => props.save(inputText)} />
          </View>
          <View style={styles.buttonBlock}>
            <Button title='Cancel'
              color={COLOR.GREY}
              onPress={() => props.cancel()} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerBlock: {
    paddingHorizontal: PADDING.horizontal,
    alignItems: 'center',
    backgroundColor: COLOR.ORANGE_LIGHT,
    height: '100%',
  },
  inputBlock: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.BROWN,
    width: '100%',
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: MARGIN.top,
    width: '70%',
  },
  buttonBlock: {
    width: '40%',
  },
});
