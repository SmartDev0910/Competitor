import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_LIGHT_SKY, COLOR_SKY} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const Badge = ({text, style}) => {
  return (
    <View style={[styles.Wrapper, style]}>
      <Text style={styles.TextFont}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_LIGHT_SKY,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    borderRadius: 100,
  },
  TextFont: {
    color: COLOR_SKY,
    fontSize: 14,
    fontFamily: FONT_REGULAR,
  },
});

export default Badge;
