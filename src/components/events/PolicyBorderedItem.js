import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const PolicyBorderedItem = ({icon, title, content}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Row}>
        <Image source={icon} style={styles.Icon} />
      </View>
      <View style={styles.Row}>
        <Text style={styles.TitleTextFont}>{title}</Text>
      </View>
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
    gap: 6,
  },
  Row: {
    flexDirection: 'row',
  },
  Icon: {
    width: 24,
    height: 24,
  },
  TitleTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 20,
  },
  ContentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
});

export default PolicyBorderedItem;
