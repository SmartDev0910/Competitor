import React from 'react';
import {Pressable, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const ToggleIconLabeledItem = ({
  icon,
  selected,
  selectedIcon,
  text,
  style,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.Wrapper,
        selected ? styles.SelectedWrapper : styles.DefaultWrapper,
        style,
      ]}
      onPress={onPress}>
      <Image source={selected ? selectedIcon : icon} style={styles.Icon} />
      <Text
        style={[
          styles.TextFont,
          selected ? styles.SelectedTextFont : styles.DefaultTextFont,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    height: 56,
    gap: 12,
  },
  SelectedWrapper: {
    backgroundColor: COLOR_PINK,
  },
  DefaultWrapper: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_EVENT_BORDER,
    borderWidth: 1,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  TextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    marginVertical: 2,
  },
  SelectedTextFont: {
    color: COLOR_WHITE,
  },
  DefaultTextFont: {
    color: COLOR_FONT_COMMENT,
  },
});

export default ToggleIconLabeledItem;
