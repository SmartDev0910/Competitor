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

const FollowerItem = ({avatar, fullName, match, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.View, style]} onPress={onPress}>
      <Image source={avatar} style={styles.Avatar} />
      <View style={styles.DetailView}>
        <Text style={styles.NameFont}>{fullName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    paddingHorizontal: 12,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
    height: 56,
  },
  Avatar: {
    width: 44,
    height: 44,
    borderRadius: 44,
  },
  NameFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    width: width - 142,
    flexWrap: 'wrap',
    marginVertical: 2,
    color: COLOR_FONT_DEFAULT,
  },
  DetailView: {
    flexDirection: 'column',
  },
  MatchView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  TearOffCalendarIcon: {
    width: 10,
    height: 10,
  },
  MatchText: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  ArrowRightIcon: {
    width: 5,
    height: 8,
  },
});

export default FollowerItem;
