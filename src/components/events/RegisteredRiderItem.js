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
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowDownIcon} from '../../constants/icons';

const RegisteredRiderItem = ({
  avatar,
  fullName,
  status,
  collapsed,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.View, style]} onPress={onPress}>
      <Image source={avatar} style={styles.Avatar} />
      <View style={styles.DetailView}>
        <Text style={styles.NameFont}>{fullName}</Text>
        <View style={styles.MatchView}>
          <Text style={styles.MatchText}>{status}</Text>
        </View>
      </View>
      {collapsed ? (
        <Image source={ArrowDownIcon} style={styles.ArrowDownIcon} />
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 10,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  NameFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
    width: width - 155,
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
  ArrowDownIcon: {},
});

export default RegisteredRiderItem;
