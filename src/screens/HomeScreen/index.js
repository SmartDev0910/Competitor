import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../constants/colors';

import MainFragment from './mainFragment';

function HomeScreen() {
  return (
    <View style={styles.Wrapper}>
      <MainFragment />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
  },
});

export default HomeScreen;
