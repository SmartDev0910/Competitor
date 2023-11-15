import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FONT_BOLD, FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_SKELETON_BORDER,
} from '../../constants/colors';

const PaperworkItem = ({image, title, content, onPress}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View style={styles.Row}>
        <Image source={image} style={styles.Image} />
      </View>
      <View style={[styles.Row, {marginTop: 8}]}>
        <Text style={styles.TitleTextFont}>{title}</Text>
      </View>
      <View>
        <Text style={styles.ContentTextFont}>{content}</Text>
      </View>
    </TouchableOpacity>
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
  Image: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLOR_SKELETON_BORDER,
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
    color: COLOR_FONT_COMMENT,
    lineHeight: 20,
  },
});

export default PaperworkItem;
