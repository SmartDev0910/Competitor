import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {PlusIcon} from '../../constants/icons';

const TouchableAddImageItem = ({icon, text, onPress, style}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View style={styles.TitleView}>
        <Image source={icon} style={styles.Icon} />
        <Text style={[styles.Text, style]}>{text}</Text>
      </View>
      <View style={styles.RightView}>
        <Image source={PlusIcon} style={styles.PlusIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 56,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    paddingLeft: 24,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  Text: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 23,
  },
  RightView: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: COLOR_EVENT_BORDER,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlusIcon: {
    width: 20,
    height: 20,
  },
});

export default TouchableAddImageItem;
