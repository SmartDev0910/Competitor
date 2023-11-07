import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {
  ClockIcon,
  InfoIcon,
  MoneyBagIcon,
  NameTagWeakIcon,
  YearOfHorseIcon,
} from '../../constants/icons';

const ClassItem = ({title, match, date, price}) => {
  return (
    <>
      <View style={styles.Wrapper}>
        <View>
          <TouchableOpacity>
            <Text style={styles.TitleFont}>{title}</Text>
          </TouchableOpacity>
          <View style={styles.DetailView}>
            <Image source={YearOfHorseIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{match}</Text>
            <Image source={ClockIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{date}</Text>
            <Image source={MoneyBagIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{price}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 8,
    flexDirection: 'column',
    marginVertical: 5,
    height: 65,
    justifyContent: 'space-between',
    marginHorizontal: 24,
    paddingHorizontal: 24,
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  DetailView: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  DetailIcon: {
    width: 14,
    height: 14,
  },
  DetailFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_COMMENT,
  },
});

export default ClassItem;
