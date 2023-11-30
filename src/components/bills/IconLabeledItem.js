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
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const IconLabeledItem = ({image, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <View style={styles.ImageView}>
        <Image source={image} style={styles.Image} />
      </View>
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
  },
  ImageView: {
    width: 44,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 24,
    height: 24,
    borderRadius: 10,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  DetailView: {
    flexDirection: 'column',
  },
});

export default IconLabeledItem;
