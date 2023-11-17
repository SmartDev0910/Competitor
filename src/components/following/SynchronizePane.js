import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_PINK,
  COLOR_SKELETON_BORDER,
  COLOR_WHITE,
} from '../../constants/colors';
import {UsefLogo1Image} from '../../constants/images';
import {FONT_REGULAR} from '../../constants/fonts';

const SynchronizePane = ({onSyncPress}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.TopView}>
        <View style={styles.TopViewItem} />
        <View style={styles.TopViewItem} />
        <View style={styles.TopViewItem} />
      </View>
      <Image source={UsefLogo1Image} style={styles.LogoImage} />
      <Pressable
        style={[styles.Button, styles.ButtonApply]}
        onPress={onSyncPress}>
        <Text style={[styles.TextStyle, styles.TextApply]}>Sync</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOR_EVENT_BORDER,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 234,
    marginTop: 60,
    marginBottom: 12,
  },
  TopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 18,
  },
  TopViewItem: {
    width: 30,
    height: 5,
    backgroundColor: COLOR_SKELETON_BORDER,
  },
  LogoImage: {
    width: 66,
    height: 66,
    marginVertical: 24,
  },
  Button: {
    borderRadius: 10,
    height: 38,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
});

export default SynchronizePane;
