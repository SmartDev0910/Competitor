import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {BookmarkOutlinedIcon, LocationIcon} from '../../constants/icons';

const EventPane = ({image, date, title, location}) => {
  return (
    <View style={styles.View}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.DateFont}>{date}</Text>
        <Text style={styles.TitleFont}>{title}</Text>
        <View style={styles.LocationView}>
          <Image source={LocationIcon} style={styles.LocationIcon} />
          <Text style={styles.LocationText}>{location}</Text>
        </View>
      </View>
      <Image source={BookmarkOutlinedIcon} style={styles.BookmarkIcon} />
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flex: 1,
    padding: 12,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
  },
  Image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  DateFont: {
    color: COLOR_PINK,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    width: width - 192,
    flexWrap: 'wrap',
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
  },
  LocationView: {
    flexDirection: 'row',
  },
  LocationIcon: {
    width: 14,
    height: 14,
  },
  LocationText: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  BookmarkIcon: {
    width: 16,
    height: 16,
  },
});

export default EventPane;
