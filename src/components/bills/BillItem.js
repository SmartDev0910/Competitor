import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const BillItem = ({image, title, role, status, onPress}) => {
  return (
    <Pressable style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <View style={styles.TitleRowView}>
          <Text style={styles.TitleFont}>{title}</Text>
          <Text
            style={[
              styles.StatusTextFont,
              status === 'Unpaid' ? styles.SignedTextFont : {},
            ]}>
            {status}
          </Text>
        </View>
        <View style={styles.StatusTextView}>
          <Text style={styles.RoleTextFont}>{role}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    marginVertical: 5,
    paddingLeft: 8,
    paddingRight: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Image: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    flexWrap: 'wrap',
  },
  DetailView: {
    flexDirection: 'column',
    marginLeft: 12,
    width: width - 120,
  },
  StatusTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RoleTextFont: {
    color: COLOR_BUTTON_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  SignedStatusView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StatusTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
    textAlign: 'right',
  },
  SignedTextFont: {
    color: COLOR_PINK,
  },
  TitleRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BillItem;
