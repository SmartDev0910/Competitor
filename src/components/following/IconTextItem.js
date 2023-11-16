import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const IconTextItem = ({icon, text}) => {
  return (
    <View style={styles.Wrapper}>
      <Image source={icon} style={styles.Icon} />
      <Text style={styles.Text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 5,
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
});

export default IconTextItem;
