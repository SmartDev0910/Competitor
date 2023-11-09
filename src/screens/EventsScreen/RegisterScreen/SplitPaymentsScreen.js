import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';

const SplitPaymentsScreen = ({navigation}) => {
  const handlePay = () => {
    navigation.navigate('ViewEventsScreen');
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  return (
    <View style={styles.Wrapper}>
      <Appbar title="Split Payments" navigation={navigation} />
      <ScrollView>
        <View style={styles.ContentView}>
          <Pressable
            style={[styles.Button, styles.ButtonApply]}
            onPress={handlePay}>
            <Text style={[styles.TextStyle, styles.TextApply]}>{'Pay'}</Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonReadyApply]}
            onPress={handleSaveAndExit}>
            <Text style={[styles.TextStyle, styles.TextReadyApply]}>
              {'SAVE & EXIT'}
            </Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonCancel]}
            onPress={handleCancel}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
  },
  ContentView: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  Button: {
    borderRadius: 10,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
  },
  ButtonReadyApply: {
    borderWidth: 1,
    borderColor: COLOR_PINK,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
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
  TextReadyApply: {
    color: COLOR_PINK,
  },
});

export default SplitPaymentsScreen;