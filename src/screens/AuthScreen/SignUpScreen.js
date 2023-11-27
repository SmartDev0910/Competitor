import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {PegasusLogoSmImage} from '../../constants/images';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  COLOR_FONT_DEFAULT,
  COLOR_GREY_TEXT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import IconLabeledText from '../../components/following/IconLabeledText';
import {
  ArrowLeftIcon,
  MailWeakIcon,
  UserIcon,
  UserWeakIcon,
} from '../../constants/icons';
import PasswordTextInput from '../../components/following/PasswordTextInput';
import ToggleIconLabeledItem from '../../components/common/ToggleIconLabeledItem';
import RolesData from '../../constants/auth/roles';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showFormView, setShowFormView] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleNextPress = () => {
    setShowFormView(!showFormView);
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.Wrapper}>
        <View style={styles.Appbar}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={ArrowLeftIcon} style={styles.AppbarButton} />
          </Pressable>
          <Image source={PegasusLogoSmImage} />
          <View></View>
        </View>
        <Text style={styles.SignInTextFont}>Sign up</Text>
        {showFormView ? (
          <View style={styles.FormView}>
            <IconLabeledText
              icon={UserWeakIcon}
              placeholder={'First name'}
              rightIconVisible={false}
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
            <IconLabeledText
              icon={UserWeakIcon}
              placeholder={'Last name'}
              rightIconVisible={false}
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
            <IconLabeledText
              icon={MailWeakIcon}
              placeholder={'abc@email.com'}
              rightIconVisible={false}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <PasswordTextInput
              placeholder={'Password'}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <PasswordTextInput
              placeholder={'Confirm password'}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
        ) : (
          <View style={styles.SelectRoleView}>
            <Text style={styles.SubTitleFont}>What are you?</Text>
            {RolesData?.map((item, index) => {
              return (
                <ToggleIconLabeledItem
                  key={index}
                  icon={item.icon}
                  selected={selectedIndex === index}
                  selectedIcon={item.selectedIcon}
                  text={item.text}
                  onPress={() => setSelectedIndex(index)}
                />
              );
            })}
          </View>
        )}
      </View>
      <View
        style={[
          styles.BottomButtonView,
          showFormView ? styles.BottomFormView : styles.BottomDefaultView,
        ]}>
        <Pressable
          style={[styles.Button, styles.ButtonSignIn]}
          onPress={handleNextPress}>
          <Text style={[styles.TextStyle, styles.TextSignIn]}>NEXT</Text>
        </Pressable>
        <Text style={styles.ORTextFont}>OR</Text>
        <View style={styles.BottomTextView}>
          <Text style={styles.BottomTextFont}>
            {`Already have an account?   `}
          </Text>
          <Pressable onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.BottomSignInTextFont}>{`Sign in`}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  Wrapper: {
    flexDirection: 'column',
    paddingHorizontal: 22,
  },
  Appbar: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AppbarButton: {
    width: 22,
    height: 22,
  },
  SignInTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 24,
    color: COLOR_FONT_DEFAULT,
    marginVertical: 10,
  },
  FormView: {
    flexDirection: 'column',
    gap: 5,
  },
  ForgotTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ForgotPasswordTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    lineHeight: 25,
    textAlign: 'center',
    color: COLOR_FONT_DEFAULT,
  },
  ResetTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    lineHeight: 25,
    color: COLOR_PINK,
  },
  SelectRoleView: {
    flexDirection: 'column',
  },
  SubTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 18,
    color: COLOR_FONT_DEFAULT,
    marginTop: 16,
    marginBottom: 5,
  },
  BottomButtonView: {
    width: width - 100,
    left: 50,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 46,
  },
  BottomDefaultView: {
    bottom: 120,
  },
  BottomFormView: {
    bottom: 75,
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
  ButtonSignIn: {
    backgroundColor: COLOR_PINK,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextSignIn: {
    color: COLOR_WHITE,
  },
  ORTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    textAlign: 'center',
    color: COLOR_GREY_TEXT,
  },
  BottomTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BottomTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 25,
    color: COLOR_FONT_DEFAULT,
  },
  BottomSignInTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_PINK,
    fontSize: 15,
    lineHeight: 25,
  },
});

export default SignUpScreen;
