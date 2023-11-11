import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONT_BOLD} from '../../constants/fonts';
import {COLOR_EVENT_BORDER, COLOR_PINK} from '../../constants/colors';
import FeesPaneItem from './FeesPaneItem';
import Divider from '../home/Divider';

const FeesPane = ({title, fees}) => {
  return (
    <View style={styles.Wrapper}>
      <View>
        <Text style={styles.TitleFont}>{title}</Text>
      </View>
      {fees.map((item, feeIndex) => (
        <React.Fragment key={'fee' + feeIndex}>
          <View style={{height: 10}} />
          <Divider style={styles.Divider} />
          <FeesPaneItem
            title={item.subTitle}
            available={item.available}
            price={item.price}
            rate={item.rate}
            amount={item.amount}
            info={item.info}
          />
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 18,
    flexDirection: 'column',
    marginVertical: 5,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 15,
    color: COLOR_PINK,
    lineHeight: 24,
    marginBottom: 10,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginBottom: 20,
  },
});

export default FeesPane;
