import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import BillsData from '../../constants/bills/bills';
import BillItem from '../../components/bills/BillItem';

const BillsView = ({navigation}) => {
  const handlePress = status => {
    if (status === 'Paid') navigation.navigate('BillsPaidScreen');
    else if (status === 'Unpaid') navigation.navigate('BillsUnPaidScreen');
    else if (status === 'Refunded') navigation.navigate('BillsRefundedScreen');
    else if (status === 'Refund pending')
      navigation.navigate('BillsRefundPendingScreen');
  };

  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        {BillsData.map((item, index) => {
          return (
            <BillItem
              key={index}
              title={item.title}
              role={item.role}
              image={item.image}
              status={item.status}
              onPress={() => handlePress(item.status)}
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

export default BillsView;
