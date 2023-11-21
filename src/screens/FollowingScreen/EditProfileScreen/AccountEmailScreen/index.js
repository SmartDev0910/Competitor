import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {FONT_REGULAR} from '../../../../constants/fonts';
import {ArrowLeftIcon, EnvelopeIcon} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_BUTTON_DEFAULT,
} from '../../../../constants/colors';
import IconLabeledText from '../../../../components/following/IconLabeledText';
import IconTextItem from '../../../../components/following/IconTextItem';

const AccountEmailScreen = ({navigation}) => {
  const [isChangeEmail, setIsChangeEmail] = React.useState(false);

  const handleChangeEmailPress = () => {
    setIsChangeEmail(true);
  };

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
        </TouchableOpacity>
        <Text style={styles.AppbarTextFont}>Account email address</Text>
      </View>
      <View style={styles.ContentView}>
        <Text style={styles.InfoTextFont}>
          This email address is used to login and manage your account
        </Text>
        {isChangeEmail ? (
          <IconLabeledText
            icon={EnvelopeIcon}
            placeholder={'Enter new email address...'}
            rightIconVisible={false}
            style={styles.IconLabeledText}
          />
        ) : (
          <IconTextItem icon={EnvelopeIcon} text="sam@testemail.com" />
        )}

        <Pressable
          style={[styles.Button, styles.ButtonApply]}
          onPress={() => handleChangeEmailPress()}>
          <Text style={[styles.TextStyle, styles.TextApply]}>
            {isChangeEmail ? 'Save' : 'Change email address'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Appbar: {
    height: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  AppbarTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_FONT_DEFAULT,
    fontSize: 24,
    marginLeft: 7,
  },
  ContentView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  InfoTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    lineHeight: 25,
    color: COLOR_FONT_DEFAULT,
    height: 80,
  },
  Button: {
    borderRadius: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 10,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
  },
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  IconLabeledText: {
    color: COLOR_FONT_DEFAULT,
  },
});

export default AccountEmailScreen;
