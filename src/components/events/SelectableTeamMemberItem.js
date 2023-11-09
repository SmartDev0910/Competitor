import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLOR_FONT_COMMENT, COLOR_WHITE} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {OkSelectedIcon, OkUnselectedIcon} from '../../constants/icons';

const SelectableTeamMemberItem = ({
  avatar,
  fullName,
  status,
  style,
  selected,
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
      <Image
        source={selected ? OkSelectedIcon : OkUnselectedIcon}
        style={styles.OkUnselectedIcon}
      />
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    padding: 4,
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
    height: 55,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  NameFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
    width: width - 140,
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
  OkUnselectedIcon: {
    width: 24,
    height: 24,
  },
});

export default SelectableTeamMemberItem;
