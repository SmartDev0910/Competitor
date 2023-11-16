import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../../constants/colors';
import {FONT_REGULAR} from '../../../../constants/fonts';
import OnsiteVendorsData from '../../../../constants/events/onsiteVendors';
import SponsorItem from '../../../../components/events/SponsorItem';

const SponsorsView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>25 sponsors</Text>
          <Text style={styles.HeadFont}>Sort</Text>
        </View>
        {OnsiteVendorsData.map((item, index) => {
          return (
            <SponsorItem
              key={index}
              title={item.title}
              role={item.role}
              image={item.image}
            />
          );
        })}
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
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
  },
});

export default SponsorsView;
