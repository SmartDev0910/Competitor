import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
} from '../../constants/colors';

const LabeledTextInput = ({label, value, onChangeText, ...props}) => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.LabelFont}>{label}</Text>
      <TextInput
        style={styles.TextInput}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    marginVertical: 10,
  },
  LabelFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    marginBottom: 5,
    lineHeight: 23,
  },
  TextInput: {
    height: 40,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_EVENT_BORDER,
    color: COLOR_PINK,
  },
});

export default LabeledTextInput;
