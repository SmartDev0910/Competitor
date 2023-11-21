import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {FONT_REGULAR} from '../../../../constants/fonts';
import {ArrowLeftIcon} from '../../../../constants/icons';
import {
  COLOR_WHITE,
  COLOR_FONT_DEFAULT,
  COLOR_BUTTON_DEFAULT,
  COLOR_BUTTON_CANCEL,
  COLOR_PINK,
} from '../../../../constants/colors';
import PasswordTextInput from '../../../../components/following/PasswordTextInput';

const ManagePasswordScreen = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateInput = () => {
    if (currentPassword === '' || newPassword === '' || confirmPassword === '')
      return false;
    return true;
  };

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
        </TouchableOpacity>
        <Text style={styles.AppbarTextFont}>Manage password</Text>
      </View>
      <View style={styles.ContentView}>
        <Text style={styles.InfoTextFont}>
          Password must contain at least 1 letter, 1 number and 1 symbol.
          Minimum length is 12 characters
        </Text>
        <PasswordTextInput
          placeholder={'Enter current password'}
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
        />
        <PasswordTextInput
          placeholder={'Enter new password'}
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
        />
        <PasswordTextInput
          placeholder={'Confirm password'}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>
      <View style={styles.BottomButton}>
        {validateInput() ? (
          <Pressable style={[styles.Button, styles.ButtonApply]}>
            <Text style={[styles.TextStyle, styles.TextApply]}>Save</Text>
          </Pressable>
        ) : (
          ''
        )}
        <Pressable style={[styles.Button, styles.ButtonCancel]}>
          <Text style={[styles.TextStyle, styles.TextCancel]}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

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
    marginBottom: 21,
  },
  BottomButton: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 10,
    width: width - 48,
  },
  Button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
});

export default ManagePasswordScreen;
