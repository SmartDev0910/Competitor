import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_PINK,
  COLOR_PINK_THIN,
} from '../../constants/colors';

const Discipline = ({
  icon,
  text,
  selected,
  selectedIcon,
  selectedRightIcon,
  onPress,
  rightIcon,
  style,
}) => {
  return (
    <>
      {selected ? (
        <TouchableOpacity
          style={[styles.View, styles.SelectedItem, style]}
          onPress={onPress}>
          <View style={styles.LeftView}>
            <Image source={selectedIcon} style={styles.Icon} />
            <Text style={[styles.Text, styles.SelectedText]}>{text}</Text>
          </View>
          <Image source={selectedRightIcon} style={styles.RightIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.View, styles.DefaultItem, style]}
          onPress={onPress}>
          <View style={styles.LeftView}>
            <Image source={icon} style={styles.Icon} />
            <Text style={[styles.Text, styles.DefaultText]}>{text}</Text>
          </View>
          <Image source={rightIcon} style={styles.RightIcon} />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 54,
    borderRadius: 10,
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
    width: 23,
    height: 22,
  },
  Text: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    marginLeft: 24,
  },
  SelectedText: {
    color: COLOR_PINK,
  },
  DefaultText: {
    color: COLOR_FONT_COMMENT,
  },
  RightIcon: {
    width: 4.2,
    height: 9,
  },
  LeftView: {
    flexDirection: 'row',
  },
});

export default Discipline;
