import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_WHITE} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const FollowButton = ({icon, text, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.Wrapper, style]} onPress={onPress}>
      <Image source={icon} style={styles.Icon} />
      <Text style={styles.TextFont}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'row',
    height: 42,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    borderRadius: 10,
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_FONT_DEFAULT,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  TextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
    textAlign: 'center',
    width: 81,
  },
});

export default FollowButton;
