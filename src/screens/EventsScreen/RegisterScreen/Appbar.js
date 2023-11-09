import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {ArrowLeftIcon, CollapseIcon, HelpIcon} from '../../../constants/icons';
import {FONT_BOLD} from '../../../constants/fonts';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../constants/colors';

const Appbar = ({title, navigation, collapsable, onCollapse, onInfoPress}) => {
  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={ArrowLeftIcon} style={styles.ArrowLeftIcon} />
      </TouchableOpacity>
      <Text style={styles.TitleFont}>{title}</Text>
      {collapsable ? (
        <TouchableOpacity onPress={onCollapse}>
          <Image source={CollapseIcon} style={styles.CollapseIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onInfoPress}>
          <Image source={HelpIcon} style={styles.HelpIcon} />
        </TouchableOpacity>
      )}
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
  HelpIcon: {
    width: 16,
    height: 16,
  },
  CollapseIcon: {
    width: 28,
    height: 28,
  },
});

export default Appbar;
