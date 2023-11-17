import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import IconTextItem from '../../../components/following/IconTextItem';
import {
  AroundGlobeIcon,
  GlobeIcon,
  MindMapIcon,
  TearOffCalendarIcon,
  UserIcon,
  YearOfHorseIcon,
} from '../../../constants/icons';
import CompetitionNumbers from '../../../constants/following/competitionNumbers';

const UserView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>PERSONAL DETAILS</Text>
          <IconTextItem icon={UserIcon} text="David Silbia" />
          <IconTextItem icon={TearOffCalendarIcon} text="23 years old" />
          <IconTextItem icon={GlobeIcon} text="Australian" />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>COMPETITION DETAILS</Text>
          <IconTextItem icon={YearOfHorseIcon} text="Dressage, Eventing" />
          <IconTextItem icon={MindMapIcon} text="Zone 3" />
          <IconTextItem icon={YearOfHorseIcon} text="Amateur" />
          <IconTextItem
            icon={AroundGlobeIcon}
            text="Expires: December 8th, 2023"
          />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>COMPETITION NUMBERS</Text>
          {CompetitionNumbers?.map((item, index) => {
            return (
              <IconTextItem key={index} icon={item.icon} text={item.title} />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
    letterSpacing: 0.16,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 10,
  },
  PartView: {
    flexDirection: 'column',
  },
});

export default UserView;
