import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_WHITE,
} from '../../constants/colors';

const TextAreaInput = () => {
  const [value, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        onChangeText={text => onChangeText(text)}
        value={value}
        multiline
        numberOfLines={4}
        placeholder={'Enter message...'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
  },
  textArea: {
    height: 213,
    borderColor: COLOR_EVENT_BORDER,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 36,
    backgroundColor: COLOR_WHITE,
    color: COLOR_BUTTON_DEFAULT,
    fontSize: 14,
  },
});

export default TextAreaInput;
