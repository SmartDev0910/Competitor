import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLOR_EVENT_BORDER} from '../../constants/colors';

const AmountText = ({style, value, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={style}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
  },
});

export default AmountText;
