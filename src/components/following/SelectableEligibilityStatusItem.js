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

const SelectableEligibilityStatusItem = ({
  image,
  title,
  status,
  expDate,
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
        <Image source={image} style={styles.Image} />
        <View style={styles.InfoTextView}>
          <Text style={styles.Text}>{title}</Text>
          <Text style={styles.Text}>
            {status + ',' + ' Expires: ' + expDate}
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
    paddingHorizontal: 8,
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
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_RED_OPACITY,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 140,
    gap: 16,
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 100,
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

export default SelectableEligibilityStatusItem;
