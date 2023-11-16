import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../../constants/colors';
import {FONT_REGULAR} from '../../../../constants/fonts';
import StallsData from '../../../../constants/events/stalls';
import StallItem from '../../../../components/events/StallItem';

const StallsView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>4 stall fees</Text>
        </View>
        {StallsData.map((item, index) => {
          return (
            <StallItem
              key={index}
              title={item.title}
              status={item.status}
              content={item.content}
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

export default StallsView;
