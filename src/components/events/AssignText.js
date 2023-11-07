import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLOR_EVENT_BORDER} from '../../constants/colors';

const AssignText = ({style, value, onChangeText, icon, placeholder}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={icon} style={{width: 24, height: 24, marginRight: 10}} />
      </TouchableOpacity>
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

export default AssignText;
