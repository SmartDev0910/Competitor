import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  MagneticCardIcon,
  MagneticCardWeakIcon,
  OkSelectedIcon,
} from '../../constants/icons';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_LIGHT_SKY,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const PaymentCardItem = ({cardNumber, defaulted, selected, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.Wrapper, defaulted ? styles.DefaultedWrapper : {}]}
      onPress={onPress}>
      <View
        style={[
          styles.CardView,
          selected ? styles.CardSelectView : {},
          defaulted ? styles.CardDefaultView : {},
        ]}>
        <Image
          source={defaulted ? MagneticCardIcon : MagneticCardWeakIcon}
          style={styles.MagneticCardIcon}
        />
        <View style={styles.CardNumberView}>
          <Text style={styles.CardNumberSecretFont}>XXXX-XXXX-XXXX-</Text>
          <Text style={styles.CardNumberPublicFont}>{cardNumber}</Text>
        </View>
      </View>
      {selected ? (
        <Image source={OkSelectedIcon} style={styles.OkSelectedIcon} />
      ) : (
        ''
      )}
      {defaulted ? (
        <View style={styles.DefaultView}>
          <Text style={styles.DefaultTextFont}>Default</Text>
        </View>
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 5,
  },
  DefaultedWrapper: {
    borderColor: COLOR_FONT_DEFAULT,
  },
  CardView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  CardSelectView: {
    width: width - 106,
  },
  CardDefaultView: {
    width: width - 166,
  },
  MagneticCardIcon: {
    width: 24,
    height: 24,
  },
  CardNumberView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardNumberSecretFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
    lineHeight: 24,
  },
  CardNumberPublicFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  OkSelectedIcon: {
    width: 24,
    height: 24,
  },
  DefaultView: {
    height: 24,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLOR_LIGHT_SKY,
  },
  DefaultTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
    color: COLOR_FONT_DEFAULT,
  },
});

export default PaymentCardItem;
