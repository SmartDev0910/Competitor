import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR_FONT_COMMENT} from '../../constants/colors';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1, // You can change this value as per your need
    backgroundColor: COLOR_FONT_COMMENT, // You can change this value to any color you want for the divider
    width: '100%',
    marginVertical: 20, // Optional vertical margin for some whitespace around the divider
  },
});

export default Divider;
