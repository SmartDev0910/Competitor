import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {DataTransferIcon, MailIcon, PhoneIcon} from '../../constants/icons';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import TouchableIconTextItem from '../../components/following/TouchableIconTextItem';

const HelpView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>Contact Pegasus staff</Text>
        </View>
        <TouchableIconTextItem
          icon={DataTransferIcon}
          text={'Open Show Manager Hub'}
          rightIconVisible={true}
        />
        <TouchableIconTextItem
          icon={PhoneIcon}
          text={'+1 202 377 9818'}
          rightIconVisible={true}
        />
        <TouchableIconTextItem
          icon={MailIcon}
          text={'help@thepegasus.app'}
          rightIconVisible={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  HeadWrapper: {
    flexDirection: 'row',
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
  },
});

export default HelpView;
