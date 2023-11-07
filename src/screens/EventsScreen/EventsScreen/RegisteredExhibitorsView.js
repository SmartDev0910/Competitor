import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import ExhibitorItem from '../../../components/events/ExhibitorItem';
import Exhibitors from '../../../constants/events/exhibitors';

const RegisteredExhibitorsView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        {Exhibitors.map((item, index) => {
          if (item.status == 1)
            return (
              <ExhibitorItem
                key={index}
                fullName={item.fullName}
                avatar={item.avatar}
                detail={item.detail}
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
    paddingTop: 10,
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

export default RegisteredExhibitorsView;
