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
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_SEARCH_TEXT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowRightIcon, OkSelectedIcon} from '../../constants/icons';

const SelectableSyncCompetitionNumberItem = ({
  image,
  title,
  value,
  selected,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.Wrapper,
        selected ? styles.SelectedWrapper : styles.UnSelectedWrapper,
        icon ? styles.IconWrapper : {},
      ]}
      onPress={onPress}>
      <View style={styles.TitleView}>
        <Image
          source={image ? image : icon ? icon : null}
          style={[image ? styles.Image : {}, icon ? styles.Icon : {}]}
        />
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
      <Image source={selected ? OkSelectedIcon : ArrowRightIcon} />
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
  IconWrapper: {
    paddingLeft: 24,
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
    backgroundColor: COLOR_WHITE,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  UnSelectedText: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
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

export default SelectableSyncCompetitionNumberItem;
