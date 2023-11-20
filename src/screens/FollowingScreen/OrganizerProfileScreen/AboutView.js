import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_GREY_DARK,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import Divider from '../../../components/home/Divider';
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from '../../../constants/icons';

const AboutView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>About</Text>
        </View>
        <Text style={styles.DescInfoTextFont}>
          {`Wellington Equestrian Center Inc. is a project that started in October 2015. Opening is scheduled for November 2017, bringing to the city of Wellington, Florida, a premier structure to receive pr...More >`}
        </Text>
        <Divider style={styles.Divider} />
        <View style={styles.ItemRowView}>
          <Text style={styles.ItemRowTitleFont}>Website</Text>
          <View style={styles.ItemRowIconView}>
            <Image source={GlobeIcon} style={styles.ItemRowIcon} />
          </View>
        </View>
        <Divider style={styles.Divider} />
        <View style={styles.ItemRowView}>
          <Text style={styles.ItemRowTitleFont}>FOLLOW US</Text>
          <View style={styles.ItemIconRowView}>
            <View style={styles.ItemRowIconView}>
              <Image source={FacebookIcon} style={styles.ItemRowIcon} />
            </View>
            <View style={styles.ItemRowIconView}>
              <Image source={InstagramIcon} style={styles.ItemRowIcon} />
            </View>
            <View style={styles.ItemRowIconView}>
              <Image source={TwitterIcon} style={styles.ItemRowIcon} />
            </View>
            <View style={styles.ItemRowIconView}>
              <Image source={PinterestIcon} style={styles.ItemRowIcon} />
            </View>
          </View>
        </View>
        <Divider style={styles.Divider} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
    textTransform: 'uppercase',
  },
  DescInfoTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
  },
  Divider: {
    backgroundColor: COLOR_EVENT_BORDER,
    width: '100%',
    height: 1,
    marginVertical: 12,
  },
  ItemRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemRowTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    textTransform: 'uppercase',
  },
  ItemRowIconView: {
    width: 36,
    height: 36,
    backgroundColor: COLOR_GREY_DARK,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemRowIcon: {
    width: 24,
    height: 24,
  },
  ItemIconRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default AboutView;
