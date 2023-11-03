import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_PINK,
  COLOR_PINK_THIN,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const CategoryItem = ({icon, text, selected, selectedIcon, onPress, style}) => {
  return (
    <>
      {selected ? (
        <TouchableOpacity
          style={[styles.View, styles.SelectedItem, style]}
          onPress={onPress}>
          <Image source={selectedIcon} style={styles.Icon} />
          <Text style={[styles.Text, styles.SelectedText]}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.View, styles.DefaultItem, style]}
          onPress={onPress}>
          <Image source={icon} style={styles.Icon} />
          <Text style={[styles.Text, styles.DefaultText]}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  View: {
    borderRadius: 10,
    height: 62,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  SelectedItem: {
    borderWidth: 1,
    borderColor: COLOR_PINK_THIN,
    backgroundColor: COLOR_PINK_THIN,
  },
  DefaultItem: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  Text: {
    fontFamily: FONT_REGULAR,
    lineHeight: 25,
  },
  SelectedText: {
    color: COLOR_PINK,
  },
  DefaultText: {
    color: COLOR_FONT_COMMENT,
  },
});
export default CategoryItem;
