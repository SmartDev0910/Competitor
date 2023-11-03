import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FONT_REGULAR} from '../../constants/fonts';
import {COLOR_FONT_COMMENT, COLOR_EVENT_BORDER} from '../../constants/colors';

const Discipline = ({icon, text, rightIcon}) => {
  return (
    <View style={styles.View}>
      <View style={styles.LeftView}>
        <Image source={icon} style={styles.Icon} />
        <Text style={styles.Text}>{text}</Text>
      </View>
      <Image source={rightIcon} style={styles.RightIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
  },
  Icon: {
    width: 23,
    height: 22,
  },
  Text: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_COMMENT,
    fontSize: 14,
    marginLeft: 24,
  },
  RightIcon: {
    width: 4.2,
    height: 9,
  },
  LeftView: {
    flexDirection: 'row',
  },
});

export default Discipline;
