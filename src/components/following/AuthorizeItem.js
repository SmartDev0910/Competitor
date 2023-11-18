import React from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {CancelWeakIcon} from '../../constants/icons';

const AuthorizeItem = ({
  avatar,
  fullName,
  detail,
  onPress,
  onRemovePress,
  removable,
}) => {
  return (
    <Pressable style={styles.View} onPress={onPress}>
      <Image source={avatar} style={styles.Avatar} />
      <View style={styles.DetailView}>
        <Text style={styles.NameFont}>{fullName}</Text>
        <View style={styles.MatchView}>
          <Text style={styles.MatchText}>{detail}</Text>
        </View>
      </View>
      {removable ? (
        <TouchableOpacity onPress={onRemovePress}>
          <Image source={CancelWeakIcon} style={styles.CancelWeakIcon} />
        </TouchableOpacity>
      ) : (
        ''
      )}
    </Pressable>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 12,
    backgroundColor: COLOR_WHITE,
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 5,
    height: 56,
    gap: 12,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  NameFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    width: width - 160,
    flexWrap: 'wrap',
    marginVertical: 2,
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
  CancelWeakIcon: {
    width: 24,
    height: 24,
  },
});

export default AuthorizeItem;
