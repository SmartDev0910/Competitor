import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import TouchableIconTextItem from '../../../components/following/TouchableIconTextItem';
import {
  AroundGlobeIcon,
  AroundGlobeWeakIcon,
  AuditWeakIcon,
  GlobeWeakIcon,
  LaurelWreathWeakIcon,
  LocationWeakIcon,
  MailWeakIcon,
  MindMapIcon,
  MindMapWeakIcon,
  PhoneWeakIcon,
  TearOffCalendarWeakIcon,
  UserWeakIcon,
  YearOfHorseIcon,
  YearOfHorseWeakIcon,
} from '../../../constants/icons';
import IconLabeledText from '../../../components/following/IconLabeledText';
import CompetitionNumbers from '../../../constants/following/competitionNumbers';

const UserView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>eligibility details</Text>
          <TouchableIconTextItem
            icon={LaurelWreathWeakIcon}
            text={'USEF number'}
            rightIconVisible={true}
          />
          <TouchableIconTextItem
            icon={LaurelWreathWeakIcon}
            text={'FEI number'}
            rightIconVisible={true}
          />
          <TouchableIconTextItem
            icon={AuditWeakIcon}
            text={'SafeSport training'}
            rightIconVisible={true}
          />
          <TouchableIconTextItem
            icon={AuditWeakIcon}
            text={'Background check'}
            rightIconVisible={true}
          />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>PERSONAL DETAILS</Text>
          <IconLabeledText
            icon={UserWeakIcon}
            placeholder={'First name...'}
            rightIconVisible={true}
          />
          <IconLabeledText
            icon={UserWeakIcon}
            placeholder={'Last name...'}
            rightIconVisible={true}
          />
          <TouchableIconTextItem
            icon={GlobeWeakIcon}
            text={'Select nationality...'}
            rightIconVisible={true}
            style={styles.TouchableIconTextItem}
          />
          <TouchableIconTextItem
            icon={TearOffCalendarWeakIcon}
            text={'Select date of birth...'}
            rightIconVisible={true}
            style={styles.TouchableIconTextItem}
          />
          <IconLabeledText
            icon={LocationWeakIcon}
            placeholder={'Enter address...'}
            rightIconVisible={false}
          />
          <IconLabeledText
            icon={PhoneWeakIcon}
            placeholder={'Enter number...'}
            rightIconVisible={true}
          />
          <IconLabeledText
            icon={MailWeakIcon}
            placeholder={'Enter email address...'}
            rightIconVisible={true}
          />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>COMPETITION DETAILS</Text>
          <TouchableIconTextItem
            icon={YearOfHorseWeakIcon}
            text={'Select disciplines...'}
            downIconVisible={true}
            style={styles.TouchableIconTextItem}
          />
          <TouchableIconTextItem
            icon={MindMapWeakIcon}
            text={'Select zone...'}
            downIconVisible={true}
            style={styles.TouchableIconTextItem}
          />
          <TouchableIconTextItem
            icon={YearOfHorseWeakIcon}
            text={'Select status...'}
            downIconVisible={true}
            style={styles.TouchableIconTextItem}
          />
          <TouchableIconTextItem
            icon={AroundGlobeWeakIcon}
            text={'Add Foreign Endorsement Letter'}
            rightIconVisible={true}
            style={styles.TouchableIconTextItem}
          />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>COMPETITION NUMBERS</Text>
          {CompetitionNumbers?.map((item, index) => {
            return (
              <TouchableIconTextItem
                key={index}
                icon={item.icon}
                text={item.text}
                rightIconVisible={true}
              />
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
  TouchableIconTextItem: {
    color: COLOR_FONT_COMMENT,
  },
});

export default UserView;
