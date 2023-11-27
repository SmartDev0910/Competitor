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
import {PegasusLogoLgImage} from '../../constants/images';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  COLOR_FONT_DEFAULT,
  COLOR_GREY_TEXT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import IconLabeledText from '../../components/following/IconLabeledText';
import {MailWeakIcon} from '../../constants/icons';
import PasswordTextInput from '../../components/following/PasswordTextInput';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.Wrapper}>
        <View style={styles.PegasusLogoLgImageView}>
          <Image
            source={PegasusLogoLgImage}
            style={styles.PegasusLogoLgImage}
          />
        </View>
        <View style={styles.FormView}>
          <Text style={styles.SignInTextFont}>Sign in</Text>
          <IconLabeledText
            icon={MailWeakIcon}
            placeholder={'abc@email.com'}
            rightIconVisible={false}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <PasswordTextInput
            placeholder={'Your password'}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.ForgotTextView}>
            <Text style={styles.ForgotPasswordTextFont}>
              {`Forgot password?  `}
            </Text>
            <Text style={styles.ResetTextFont}>{`Reset >`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.BottomButtonView}>
        <Pressable style={[styles.Button, styles.ButtonSignIn]}>
          <Text style={[styles.TextStyle, styles.TextSignIn]}>Sign in</Text>
        </Pressable>
        <Text style={styles.ORTextFont}>OR</Text>
        <View style={styles.BottomTextView}>
          <Text style={styles.BottomTextFont}>
            {`Don’t have an account?   `}
          </Text>
          <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.BottomSignUpTextFont}>{`Sign up`}</Text>
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
  PegasusLogoLgImage: {
    width: 150,
    height: 150,
  },
  PegasusLogoLgImageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  SignInTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 24,
    color: COLOR_FONT_DEFAULT,
    marginBottom: 15,
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
  BottomButtonView: {
    width: width - 100,
    left: 50,
    bottom: 120,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 46,
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
  BottomSignUpTextFont: {
    fontFamily: FONT_REGULAR,
    color: COLOR_PINK,
    fontSize: 15,
    lineHeight: 25,
  },
});

export default SignInScreen;
