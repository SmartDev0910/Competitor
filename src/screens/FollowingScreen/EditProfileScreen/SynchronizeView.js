import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import SynchronizePane from '../../../components/following/SynchronizePane';

const SynchronizeView = () => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.PartView}>
          <Text style={styles.HeadFont}>eligibility status</Text>
          <SynchronizePane />
          <Text style={styles.BottomFont}>
            Sync with USEF to view eligibility status
          </Text>
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
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 34,
    letterSpacing: 0.16,
    textTransform: 'uppercase',
  },
  PartView: {
    flexDirection: 'column',
  },
  BottomFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 23,
    color: COLOR_FONT_DEFAULT,
  },
});

export default SynchronizeView;
