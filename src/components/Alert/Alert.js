import { Alert } from 'react-native';

export const Alert1 = (props) => {
  return (
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
  )
};