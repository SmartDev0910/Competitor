import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLOR_EVENT_BORDER, COLOR_WHITE} from '../../constants/colors';
import {AttachWeakIcon, SendThinIcon} from '../../constants/icons';

const MessageText = ({style, value, onChangeText, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={AttachWeakIcon}
          style={{width: 24, height: 24, marginRight: 10}}
        />
      </TouchableOpacity>
      <TextInput
        style={style}
        value={value}
        onChangeText={onChangeText}
        placeholder="Write message..."
      />
      <TouchableOpacity onPress={onPress}>
        <Image source={SendThinIcon} style={{width: 24, height: 24}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
});

export default MessageText;
