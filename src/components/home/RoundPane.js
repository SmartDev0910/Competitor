import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONT_REGULAR} from '../../constants/fonts';
import {COLOR_FONT_COMMENT, COLOR_EVENT_BORDER} from '../../constants/colors';

const RoundPane = ({text, style}) => {
  return (
    <View style={[styles.View, style]}>
      <Text style={styles.Text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
  },
  Text: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_COMMENT,
    fontSize: 14,
    lineHeight: 25,
  },
});

export default RoundPane;
