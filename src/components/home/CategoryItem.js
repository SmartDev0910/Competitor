import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {COLOR_EVENT_BORDER, COLOR_FONT_COMMENT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const CategoryItem = ({icon, text, selected, onPress, style}) => {
  return (
    <View style={[styles.View, style]}>
      <Image source={icon} style={styles.Icon} />
      <Text style={styles.Text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    height: 62,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  Text: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    lineHeight: 25,
  },
});
export default CategoryItem;
