import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ArrowLeftIcon} from '../../../constants/icons';
import {FONT_BOLD} from '../../../constants/fonts';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../constants/colors';

const Appbar = ({title, navigation}) => {
  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={ArrowLeftIcon} style={styles.ArrowLeftIcon} />
      </TouchableOpacity>
      <Text style={styles.TitleFont}>{title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: COLOR_WHITE,
    borderBottomWidth: COLOR_EVENT_BORDER,
    borderBottomWidth: 1,
  },
  ArrowLeftIcon: {
    width: 18,
    height: 18,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
});

export default Appbar;
