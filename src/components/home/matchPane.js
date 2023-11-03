import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import {
  COLOR_FONT_DEFAULT,
  COLOR_GREY,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {
  PrizeIcon,
  YearOfHorseIcon,
  LocationIcon,
  CalendarIcon,
  BookmarkSelectedIcon,
} from '../../constants/icons';
import {
  UserOval1Image,
  UserOval2Image,
  UserOval3Image,
} from '../../constants/images';

const MatchPane = ({
  introImages,
  day,
  month,
  logo,
  title,
  discipline,
  prize,
  place,
  registrationDate,
}) => {
  return (
    <View style={styles.View}>
      <View style={styles.AdImageView}>
        <Image source={introImages[0]} style={styles.AdImageView} />
        <View style={styles.DateView}>
          <Text style={styles.DayFont}>{day}</Text>
          <Text style={styles.DayFont}>{month}</Text>
        </View>
        <Image source={logo} style={styles.LogoImage} />
        <View style={styles.BookmarkView}>
          <Image
            source={BookmarkSelectedIcon}
            style={styles.BookmarkSelectedIcon}
          />
        </View>
      </View>
      <Text style={styles.TitleText}>{title}</Text>
      <View style={styles.DetailView}>
        <Image
          source={YearOfHorseIcon}
          style={styles.DetailImage}
          resizeMode="contain"
        />
        <Text style={styles.DetailText}>{discipline}</Text>
      </View>
      <View style={styles.DetailView}>
        <Image
          source={PrizeIcon}
          style={styles.DetailImage}
          resizeMode="contain"
        />
        <Text style={styles.DetailText}>{prize}</Text>
      </View>
      <View style={styles.DetailView}>
        <Image
          source={LocationIcon}
          style={styles.DetailImage}
          resizeMode="contain"
        />
        <Text style={styles.DetailText}>{place}</Text>
      </View>
      <View style={styles.DetailView}>
        <Image
          source={CalendarIcon}
          style={styles.DetailImage}
          resizeMode="contain"
        />
        <Text style={styles.DetailText}>{registrationDate}</Text>
      </View>
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
        <Text style={styles.StatisticPinkText}>20 Registered,</Text>
        <Text style={styles.StatisticText}>10 waitlisted</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    width: '100%',
    marginVertical: 14,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  AdImageView: {
    width: '100%',
    height: 312,
    borderRadius: 12,
  },
  TitleText: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    marginVertical: 10,
  },
  DetailView: {
    flexDirection: 'row',
    marginVertical: 1,
    gap: 9,
  },
  DetailText: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
  },
  DetailImage: {
    width: 14,
    height: 14,
  },
  StatisticView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  StatisticImagesView: {
    flexDirection: 'row',
    gap: -8,
  },
  StatisticImage: {
    borderRadius: 24,
    width: 24,
    height: 24,
  },
  StatisticPinkText: {
    fontFamily: FONT_BOLD,
    fontSize: 12,
    color: COLOR_PINK,
    lineHeight: 20,
  },
  StatisticText: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 20,
  },
  DateView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    width: 45,
    height: 45,
    backgroundColor: COLOR_GREY,
    borderRadius: 6,
    backdropFilter: 'blur(3px)',
  },
  DayFont: {
    color: COLOR_PINK,
    fontFamily: FONT_BOLD,
    fontSize: 14,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  LogoImage: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 45,
    height: 45,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLOR_WHITE,
  },
  BookmarkView: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: COLOR_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
  },
  BookmarkSelectedIcon: {
    width: 14,
    height: 14,
  },
});

export default MatchPane;
