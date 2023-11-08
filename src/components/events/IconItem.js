import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const IconItem = ({image, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    paddingHorizontal: 12,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    height: 55,
    alignItems: 'center',
  },
  Image: {
    width: 24,
    height: 24,
    borderRadius: 10,
  },
  LocationFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    width: width - 150,
    flexWrap: 'wrap',
    marginVertical: 2,
    color: COLOR_FONT_DEFAULT,
  },
  DetailView: {
    flexDirection: 'column',
    marginLeft: 21,
  },
  StatusTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RubberStampIcon: {
    width: 9,
    height: 11,
    marginRight: 6,
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
});

export default IconItem;
