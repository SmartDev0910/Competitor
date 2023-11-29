import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowDownIcon, ArrowRightIcon} from '../../constants/icons';

const TouchableIconTextItem = ({
  icon,
  text,
  rightIconVisible,
  downIconVisible,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View style={styles.TitleView}>
        <Image source={icon} style={styles.Icon} />
        <Text style={[styles.Text, style]}>{text}</Text>
      </View>
      {rightIconVisible ? <Image source={ArrowRightIcon} /> : ''}
      {downIconVisible ? <Image source={ArrowDownIcon} /> : ''}
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    height: 56,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 24,
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
    width: width - 140,
  },
});

export default TouchableIconTextItem;
