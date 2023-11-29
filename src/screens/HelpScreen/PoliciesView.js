import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {RegularDocumentIcon} from '../../constants/icons';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import TouchableIconTextItem from '../../components/following/TouchableIconTextItem';

const PoliciesView = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>5 platform policies</Text>
        </View>
        <TouchableIconTextItem
          icon={RegularDocumentIcon}
          text={'Terms and Conditions'}
          rightIconVisible={true}
          onPress={() => navigation.navigate('HelpTermsAndConditionsScreen')}
        />
        <TouchableIconTextItem
          icon={RegularDocumentIcon}
          text={'Privacy Policy'}
          rightIconVisible={true}
        />
        <TouchableIconTextItem
          icon={RegularDocumentIcon}
          text={'End User License Agreement'}
          rightIconVisible={true}
        />
        <TouchableIconTextItem
          icon={RegularDocumentIcon}
          text={'Disclaimer'}
          rightIconVisible={true}
        />
        <TouchableIconTextItem
          icon={RegularDocumentIcon}
          text={'Acceptable Use Policy'}
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

export default PoliciesView;
