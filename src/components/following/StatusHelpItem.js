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
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const StatusHelpItem = ({image, title, content}) => {
  return (
    <View style={styles.View}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{title}</Text>
        <Text style={styles.ContentFont}>{content}</Text>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    padding: 24,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
  },
  Image: {
    width: 24,
    height: 24,
    marginTop: 2,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    marginBottom: 2,
    color: COLOR_FONT_DEFAULT,
  },
  ContentFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    width: width - 100,
    flexWrap: 'wrap',
    marginBottom: 2,
    color: COLOR_FONT_COMMENT,
  },
  DetailView: {
    flexDirection: 'column',
  },
});

export default StatusHelpItem;
