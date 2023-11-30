import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { COLOR_FONT_COMMENT, COLOR_WHITE } from '../../constants/colors';
import { FONT_REGULAR, FONT_SEMI_BOLD } from '../../constants/fonts';
import { YearOfHorseIcon } from '../../constants/icons';

const ExhibitorItem = ({ avatar, fullName, detail, onPress }) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <Image source={avatar} style={styles.Avatar} />
      <View style={styles.DetailView}>
        <Text style={styles.NameFont}>{fullName}</Text>
        <View style={styles.MatchView}>
          <Image source={YearOfHorseIcon} style={styles.TearOffCalendarIcon} />
          <Text style={styles.MatchText}>{detail}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flex: 1,
    padding: 12,
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  NameFont: {
    fontFamily: FONT_REGULAR,
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

export default ExhibitorItem;
