import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../../constants/colors';
import {FONT_REGULAR} from '../../../../constants/fonts';
import DaySchedulesData from '../../../../constants/events/daySchedules';
import DayScheduleItem from '../../../../components/events/DayScheduleItem';

const DayView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>5 timings</Text>
          <Text style={styles.HeadFont}>Sort</Text>
        </View>
        {DaySchedulesData.map((item, index) => {
          return (
            <DayScheduleItem
              key={index}
              time={item.time}
              status={item.status}
              statusInfo={item.statusInfo}
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

export default DayView;
