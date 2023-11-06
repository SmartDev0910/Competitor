import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import AuthorityPane from '../../components/events/AuthorityPane';
import {PublicSafetyIcon} from '../../constants/icons';

const AuthorityView = ({navigation}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.HeadWrapper}>
        <Text style={styles.HeadFont}>
          Authority to register you for events
        </Text>
        <Text
          style={styles.HeadFont}
          onPress={() => navigation.navigate('ProfileScreen')}>
          Edit
        </Text>
      </View>
      <AuthorityPane image={PublicSafetyIcon} title="Unauthorized" />
    </View>
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

export default AuthorityView;
