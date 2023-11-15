import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FONT_BOLD, FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';

const PolicyItem = ({icon, title, content, onPress}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Row}>
        <Image source={icon} style={styles.Icon} />
      </View>
      <View style={styles.Row}>
        <Text style={styles.TitleTextFont}>{title}</Text>
      </View>
      <View>
        <Text style={styles.ContentTextFont}>{content}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.MoreTextFont}>{'More >'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  Row: {
    flexDirection: 'row',
  },
  Icon: {
    width: 24,
    height: 24,
  },
  TitleTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 20,
  },
  ContentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  MoreTextFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 14,
    textDecorationLine: 'underline',
    color: COLOR_FONT_DEFAULT,
  },
});

export default PolicyItem;
