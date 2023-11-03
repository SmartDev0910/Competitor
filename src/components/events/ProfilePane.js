import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {COLOR_FONT_COMMENT, COLOR_WHITE} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {YearOfHorseIcon} from '../../constants/icons';

const ProfilePane = ({image, fullName, statusText, onPress}) => {
  return (
    <View style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{fullName}</Text>
        <View style={styles.StatusTextView}>
          <Image source={YearOfHorseIcon} style={styles.YearOfHorseIcon} />
          <Text style={styles.StatusTextFont}>{statusText}</Text>
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
    paddingHorizontal: 24,
  },
  Image: {
    width: 45,
    height: 45,
    borderRadius: 100,
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
});

export default ProfilePane;
