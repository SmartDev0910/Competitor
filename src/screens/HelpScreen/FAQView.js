import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {HelpIcon} from '../../constants/icons';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import TouchableIconTextItem from '../../components/following/TouchableIconTextItem';

const FAQView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>Frequently asked questions</Text>
        </View>
        <TouchableIconTextItem
          icon={HelpIcon}
          text={'Why can’t I create an event?'}
          rightIconVisible={true}
          onPress={() => navigation.navigate('HelpFAQScreen')}
        />
        <TouchableIconTextItem
          icon={HelpIcon}
          text={'Where can I view and save the paperwork I signed?'}
          rightIconVisible={true}
        />
        <TouchableIconTextItem
          icon={HelpIcon}
          text={'How do I delete a credit card saved to my account?'}
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

export default FAQView;
