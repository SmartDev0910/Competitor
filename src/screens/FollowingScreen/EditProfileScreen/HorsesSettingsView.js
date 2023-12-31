import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../../constants/fonts';
import {PlusOutlinedIcon} from '../../../constants/icons';
import AuthorizeItem from '../../../components/following/AuthorizeItem';
import Horses from '../../../constants/following/horses';

const HorsesSettingsView = ({navigation}) => {
  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.Wrapper}>
        <View style={styles.AuthorizeTitleView}>
          <Text style={styles.AuthorizeFont}>horses</Text>
        </View>
        <View style={styles.AuthorizedWrapper}>
          {Horses.map((item, index) => {
            return (
              <AuthorizeItem
                key={index}
                fullName={item.fullName}
                avatar={item.avatar}
                detail={item.status}
              />
            );
          })}
        </View>
        <View style={styles.PlusIconView}>
          <Image source={PlusOutlinedIcon} style={styles.PlusOutlinedIcon} />
        </View>
      </View>
    </ScrollView>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: COLOR_WHITE,
  },
  Wrapper: {
    flex: 1,
    marginBottom: 36,
  },
  AuthorizedWrapper: {
    flexDirection: 'column',
    width: '100%',
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
  SubTitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    paddingHorizontal: 24,
    marginTop: 12,
  },
  AuthorizeTitleView: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  AuthorizeFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    marginTop: 8,
    textTransform: 'uppercase',
  },
  HelpIcon: {
    width: 14,
    height: 14,
  },
  PlusOutlinedIcon: {
    width: 24,
    height: 24,
  },
  PlusIconView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 15,
  },
  Divider: {
    width: width - 48,
    height: 1,
    backgroundColor: COLOR_FONT_COMMENT,
    marginLeft: 24,
  },
});

export default HorsesSettingsView;
