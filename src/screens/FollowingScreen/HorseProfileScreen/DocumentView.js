import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import IconTextItem from '../../../components/following/IconTextItem';
import {
  CertificateWeakIcon,
  DoctorsBagWeakIcon,
  InsulinPenWeakIcon,
  LengthWeakIcon,
} from '../../../constants/icons';

const DocumentView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>documents</Text>
          <IconTextItem icon={LengthWeakIcon} text="Measurement card" />
          <IconTextItem icon={CertificateWeakIcon} text="Coggins" />
          <IconTextItem icon={DoctorsBagWeakIcon} text="Health records" />
        </View>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>VACCINATIONS</Text>
          <IconTextItem icon={InsulinPenWeakIcon} text="Vaccinations records" />
          <IconTextItem
            icon={InsulinPenWeakIcon}
            text="Rhinopneumonitis status"
          />
          <IconTextItem
            icon={InsulinPenWeakIcon}
            text="Influenza current status"
          />
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

export default DocumentView;
