import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../constants/colors';
import MatchPane from '../../components/home/matchPane';
import LicensedHorseMatchs from '../../constants/home/licensedHorseMatchs';

function MainFragment() {
  return (
    <ScrollView style={styles.ScrollWrapper}>
      <View style={styles.Wrapper}>
        {LicensedHorseMatchs.map((item, index) => {
          return (
            <MatchPane
              key={index}
              introImages={item.introImages}
              day={item.day}
              month={item.month}
              logo={item.logo}
              title={item.title}
              discipline={item.discipline}
              prize={item.prize}
              place={item.place}
              registrationDate={item.registrationDate}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollWrapper: {
    backgroundColor: COLOR_WHITE,
  },
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
});

export default MainFragment;
