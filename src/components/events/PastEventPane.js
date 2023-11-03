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
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {PasteIcon, PrizeIcon} from '../../constants/icons';

const PastEventPane = ({
  image,
  location,
  title,
  prize,
  statusText,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.LocationFont}>{location}</Text>
        <Text style={styles.TitleFont}>{title}</Text>
        <View style={styles.PrizeView}>
          <Image source={PrizeIcon} style={styles.PrizeIcon} />
          <Text style={styles.PrizeTextFont}>{prize}</Text>
        </View>
        <View style={styles.StatusTextView}>
          <Image source={PasteIcon} style={styles.PasteIcon} />
          <Text style={styles.StatusTextFont}>{statusText}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    height: 92,
    borderRadius: 10,
  },
  LocationFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    width: width - 150,
    flexWrap: 'wrap',
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
  },
  StatusTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PasteIcon: {
    width: 9,
    height: 11,
    marginRight: 6,
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  PrizeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PrizeIcon: {
    width: 9,
    height: 11,
    marginRight: 6,
  },
  PrizeTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
});

export default PastEventPane;
