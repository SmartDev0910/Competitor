import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_RED_OPACITY} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowRightIcon, ErrorOutlinedIcon} from '../../constants/icons';

const SelectableSuspensionItem = ({title, details, onPress}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View style={styles.TitleView}>
        <Image source={ErrorOutlinedIcon} style={styles.Image} />
        <View style={styles.InfoTextView}>
          <Text style={styles.Text}>{title}</Text>
          <Text style={styles.Text}>{details}</Text>
        </View>
      </View>
      <Image source={ArrowRightIcon} />
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    height: 56,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_RED_OPACITY,
    backgroundColor: COLOR_RED_OPACITY,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 140,
    gap: 16,
  },
  Image: {
    width: 24,
    height: 24,
  },
  Text: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 23,
  },
  InfoTextView: {
    flexDirection: 'column',
  },
});

export default SelectableSuspensionItem;
