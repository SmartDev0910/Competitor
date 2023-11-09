import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_PINK_THIN,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const SoftFeedButton = ({text, selected, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.Wrapper,
        selected ? styles.SelectedWrapper : styles.DefaultWrapper,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.TextFont,
          selected ? styles.SelectedTextFont : styles.DefaultTextFont,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 8,

    gap: 12,
    alignItems: 'center',
    height: 56,
    width: '100%',
    justifyContent: 'center',
  },
  TextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  SelectedTextFont: {
    color: COLOR_PINK,
  },
  DefaultTextFont: {
    color: COLOR_FONT_DEFAULT,
  },
  SelectedWrapper: {
    backgroundColor: COLOR_PINK_THIN,
  },
  DefaultWrapper: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
  },
});

export default SoftFeedButton;
