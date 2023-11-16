import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../../constants/colors';
import {FONT_REGULAR} from '../../../../constants/fonts';
import VolunteerItem from '../../../../components/events/VolunteerItem';
import JudgesData from '../../../../constants/events/judges';

const JudgesView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>6 judges & scorers</Text>
        </View>
        {JudgesData.map((item, index) => {
          return (
            <VolunteerItem
              key={index}
              fullName={item.fullName}
              avatar={item.avatar}
              status={item.status}
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

export default JudgesView;
