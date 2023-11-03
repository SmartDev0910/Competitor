import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONT_REGULAR} from '../../constants/fonts';
import Slider from '@react-native-community/slider';
import {COLOR_EVENT_BORDER, COLOR_PINK} from '../../constants/colors';

const SliderPane = ({title, value, sliderValue, onValueChange, style}) => {
  return (
    <View style={[styles.View, style]}>
      <View style={styles.TitleView}>
        <Text style={styles.TitleFont}>{title}</Text>
        <Text style={styles.ValueFont}>Max ${value}</Text>
      </View>
      <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor={COLOR_PINK}
        maximumTrackTintColor={COLOR_EVENT_BORDER}
        step={1}
        value={sliderValue}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: 'column',
  },
  TitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
  },
  ValueFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 18,
    lineHeight: 34,
  },
});

export default SliderPane;
