import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_PINK,
  COLOR_PINK_THIN,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const EventItem = ({image, title, statusText, onPress}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <View style={styles.ImageView}>
        <Image source={image} style={styles.Image} />
      </View>
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{title}</Text>
        <View style={styles.StatusTextView}>
          <Text style={styles.StatusTextFont}>{statusText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    height: 55,
  },
  Image: {
    width: 24,
    height: 24,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    width: width - 150,
    flexWrap: 'wrap',
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  StatusTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  YearOfHorseIcon: {
    width: 9,
    height: 11,
    marginRight: 6,
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  ImageView: {
    borderRadius: 5,
    backgroundColor: COLOR_PINK_THIN,
    width: 35,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventItem;
