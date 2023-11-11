import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {MagneticCardIcon, OkSelectedIcon} from '../../constants/icons';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const PaymentCardItem = ({cardNumber, selected, onPress}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View style={styles.CardView}>
        <Image source={MagneticCardIcon} style={styles.MagneticCardIcon} />
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
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  CardView: {
    width: width - 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
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
});

export default PaymentCardItem;
