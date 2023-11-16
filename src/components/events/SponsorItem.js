import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';

const SponsorItem = ({image, title, role, onPress}) => {
  return (
    <View style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{title}</Text>
        <View style={styles.StatusTextView}>
          <Text style={styles.StatusTextFont}>{role}</Text>
        </View>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    marginVertical: 5,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  Image: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    width: width,
    flexWrap: 'wrap',
  },
  DetailView: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  StatusTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
});

export default SponsorItem;
