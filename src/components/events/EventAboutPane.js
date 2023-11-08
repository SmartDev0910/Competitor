import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {COLOR_FONT_COMMENT, COLOR_WHITE} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';

const EventAboutPane = ({image, title, role, onPress}) => {
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
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    height: 55,
  },
  Image: {
    width: 36,
    height: 36,
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

export default EventAboutPane;
