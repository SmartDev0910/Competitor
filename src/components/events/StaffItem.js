import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLOR_EVENT_BORDER, COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  JaylinWilliamsImage,
  MichelleWilliams1Image,
  TammyWilliamsImage,
} from '../../constants/images';

const StaffItem = ({icon, text, iconList, onPress}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View style={styles.TitleTextView}>
        <Image source={icon} style={styles.TitleIcon} />
        <Text style={styles.TitleTextFont}>{text}</Text>
      </View>
      <View style={styles.StatisticView}>
        <View style={styles.StatisticImagesView}>
          <Image
            source={TammyWilliamsImage}
            style={[styles.StatisticImage, {zIndex: 3}]}
          />
          <Image
            source={MichelleWilliams1Image}
            style={[styles.StatisticImage, {zIndex: 2}]}
          />
          <Image
            source={JaylinWilliamsImage}
            style={[styles.StatisticImage, {zIndex: 1}]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'cener',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  TitleTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 56,
  },
  TitleIcon: {
    width: 24,
    height: 24,
  },
  TitleTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 20,
  },
  StatisticView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    gap: 4,
  },
  StatisticImagesView: {
    flexDirection: 'row',
    gap: -24,
  },
  StatisticImage: {
    borderRadius: 45,
    width: 45,
    height: 45,
  },
});

export default StaffItem;
