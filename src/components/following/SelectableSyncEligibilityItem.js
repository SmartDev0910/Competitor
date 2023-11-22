import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_RED_OPACITY,
  COLOR_SEARCH_TEXT,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {CancelOutlinedIcon, OkSelectedIcon} from '../../constants/icons';

const SelectableSyncEligibilityItem = ({
  image,
  title,
  value,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.Wrapper,
        selected ? styles.SelectedWrapper : styles.UnSelectedWrapper,
      ]}
      onPress={onPress}>
      <View style={styles.TitleView}>
        <View style={styles.ImageView}>
          <Image source={image} style={styles.Image} />
        </View>
        <View style={styles.InfoTextView}>
          <Text
            style={[selected ? styles.SelectedText : styles.UnSelectedText]}>
            {title}
          </Text>
          <Text
            style={[selected ? styles.SelectedText : styles.UnSelectedText]}>
            {value}
          </Text>
        </View>
      </View>
      <Image source={selected ? OkSelectedIcon : CancelOutlinedIcon} />
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
  },
  SelectedWrapper: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_SEARCH_TEXT,
  },
  UnSelectedWrapper: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_RED_OPACITY,
    backgroundColor: COLOR_RED_OPACITY,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  ImageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  Image: {},
  UnSelectedText: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 23,
  },
  SelectedText: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 23,
  },
  InfoTextView: {
    flexDirection: 'column',
  },
});

export default SelectableSyncEligibilityItem;
