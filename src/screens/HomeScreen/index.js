import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_WHITE} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

import MainFragment from './mainFragment';

function HomeScreen() {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <View style={styles.CurrentLocation}>
          <Text style={styles.LocationTitle}>Current Location</Text>
          <Text style={styles.LocationDetail}>Middleburg, VA</Text>
        </View>
        <Button title="Search" />
        <Button title="Group" />
        <Button title="Map" />
      </View>
      <MainFragment />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
  },
  Appbar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    // gap: 1,
  },
  CurrentLocation: {
    flexDirection: 'column',
  },
  LocationTitle: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
  },
  LocationDetail: {
    fontFamily: FONT_BOLD,
    fontSize: 13,
    color: COLOR_FONT_DEFAULT,
  },
});

export default HomeScreen;
