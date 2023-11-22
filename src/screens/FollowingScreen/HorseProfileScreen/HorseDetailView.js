import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import IconTextItem from '../../../components/following/IconTextItem';
import {
  AroundGlobeIcon,
  BiotechIcon,
  ElectronicsIcon,
  GenderIcon,
  GlobeIcon,
  LaurelWreathIcon,
  MindMapIcon,
  NameTagIcon,
  PaintBrushIcon,
  PaintPaletteIcon,
  RulerVerticalIcon,
  TearOffCalendarIcon,
  YearOfHorseIcon,
} from '../../../constants/icons';
import CompetitionNumbers from '../../../constants/following/competitionNumbers';

const HorseDetailView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>government numbers</Text>
          <IconTextItem icon={LaurelWreathIcon} text="USEF number: 102910" />
          <IconTextItem icon={LaurelWreathIcon} text="FEI number: 1039109" />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>Horse DETAILS</Text>
          <IconTextItem icon={NameTagIcon} text="Name: Skippy" />
          <IconTextItem icon={BiotechIcon} text="Thoroughbred" />
          <IconTextItem icon={RulerVerticalIcon} text="16.3 h" />
          <IconTextItem
            icon={TearOffCalendarIcon}
            text="DoB: February 21st, 2019"
          />
          <IconTextItem icon={GenderIcon} text="Gelding" />
          <IconTextItem icon={YearOfHorseIcon} text="Dressage" />
          <IconTextItem icon={MindMapIcon} text="Zone 4" />
          <IconTextItem icon={PaintPaletteIcon} text="Bay" />
          <IconTextItem icon={PaintBrushIcon} text="Sock, blaze" />
          <IconTextItem icon={GlobeIcon} text="USA" />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>OTHER NUMBERS</Text>
          <IconTextItem
            icon={ElectronicsIcon}
            text="Microchip number: 10291029"
          />
          <IconTextItem icon={BiotechIcon} text="DNA case number: 1029109" />
          <IconTextItem icon={AroundGlobeIcon} text="Passport number: 102910" />
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

export default HorseDetailView;
