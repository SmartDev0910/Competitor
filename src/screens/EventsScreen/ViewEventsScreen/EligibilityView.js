import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  COLOR_FONT_DEFAULT,
  COLOR_SEARCH_TEXT,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';

const EligibilityView = ({navigation}) => {
  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>5 issues found</Text>
          <Text style={styles.HeadFont}>Refresh</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingTop: 12,
    backgroundColor: COLOR_WHITE,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
  },
});

export default EligibilityView;
