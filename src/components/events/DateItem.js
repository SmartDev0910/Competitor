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
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const DateItem = ({image, title, statusText, onPress}) => {
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
    width: 22,
    height: 22,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    width: width - 150,
    flexWrap: 'wrap',
    marginVertical: 2,
    color: COLOR_PINK,
  },
  DetailView: {
    flexDirection: 'column',
  },
});

export default DateItem;
