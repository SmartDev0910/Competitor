import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import {
  UserOval1Image,
  UserOval2Image,
  UserOval3Image,
} from '../../constants/images';

const StatisticPane = () => {
  return (
    <View style={styles.StatisticView}>
      <View style={styles.StatisticImagesView}>
        <Image
          source={UserOval1Image}
          style={styles.StatisticImage}
          resizeMode="contain"
        />
        <Image
          source={UserOval2Image}
          style={styles.StatisticImage}
          resizeMode="contain"
        />
        <Image
          source={UserOval3Image}
          style={styles.StatisticImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.StatisticTextView}>
        <Text style={styles.StatisticBoldText}>136 Registered</Text>
        <Text style={styles.StatisticText}>23 on waitlist</Text>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  StatisticView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 55,
    backgroundColor: COLOR_WHITE,
  },
  StatisticImagesView: {
    flexDirection: 'row',
    gap: -14,
  },
  StatisticImage: {
    borderRadius: 36,
    width: 36,
    height: 36,
  },
  StatisticBoldText: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  StatisticText: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 20,
  },
  StatisticTextView: {
    flexDirection: 'column',
  },
});

export default StatisticPane;
