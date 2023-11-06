import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {ZoetisImage} from '../../constants/images';
import {
  COLOR_BLACK,
  COLOR_BUTTON_DEFAULT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const ZoetisPane = ({style}) => {
  return (
    <View style={[styles.Wrapper, style]}>
      <Image source={ZoetisImage} style={StyleSheet.ZoetisImage} />
      <View style={styles.ZoetisView}>
        <Text style={styles.TitleFont}>Zoetis</Text>
        <Text style={styles.DescFont}>proudly presents...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 60,
    width: 255,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 8,
    shadowColor: COLOR_BLACK,
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
  ZoetisImage: {
    width: 45,
    height: 45,
    borderRadius: 30,
    shadowColor: 'lightgray',
    shadowOpacity: 0.5,
  },
  ZoetisView: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
  },
  DescFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_BUTTON_DEFAULT,
  },
});

export default ZoetisPane;
