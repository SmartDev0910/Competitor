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

const StatusHelpItem = ({image, title, content, onPress}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <View style={styles.ImageView}>
        <Image source={image} style={styles.Image} />
      </View>
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{title}</Text>
        {content ? <Text style={styles.TitleFont}>{content}</Text> : ''}
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
  },
  ImageView: {
    width: 44,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 22,
    height: 22,
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
    marginBottom: 2,
    color: COLOR_FONT_DEFAULT,
  },
  DetailView: {
    flexDirection: 'column',
  },
});

export default StatusHelpItem;
