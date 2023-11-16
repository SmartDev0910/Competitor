import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const StallItem = ({title, status, content, style}) => {
  return (
    <View style={[styles.Wrapper, style]}>
      <Text style={styles.TitleTextFont}>{title}</Text>
      <Text style={styles.StatusTextFont}>{status}</Text>
      <Text style={styles.ContentTextFont}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    padding: 12,
    marginVertical: 5,
    flexDirection: 'column',
  },
  TitleTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  StatusTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 20,
  },
  ContentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
  },
});

export default StallItem;
