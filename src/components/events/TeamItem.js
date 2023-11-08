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
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {ArrowRightIcon, TearOffCalendarIcon} from '../../constants/icons';

const TeamItem = ({avatar, fullName, match, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.View, style]} onPress={onPress}>
      <Image source={avatar} style={styles.Avatar} />
      <View style={styles.DetailView}>
        <Text style={styles.NameFont}>{fullName}</Text>
        <View style={styles.MatchView}>
          <Image
            source={TearOffCalendarIcon}
            style={styles.TearOffCalendarIcon}
          />
          <Text style={styles.MatchText}>{match}</Text>
        </View>
      </View>
      <Image source={ArrowRightIcon} style={styles.ArrowRightIcon} />
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    padding: 12,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
    height: 65,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  NameFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    width: width - 142,
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
  ArrowRightIcon: {
    width: 5,
    height: 8,
  },
});

export default TeamItem;
