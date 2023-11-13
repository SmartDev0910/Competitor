import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ArrowRightIcon, MagneticCardIcon} from '../../constants/icons';
import {COLOR_EVENT_BORDER, COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const AddNewCardItem = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
      <View style={styles.CardView}>
        <Image source={MagneticCardIcon} style={styles.MagneticCardIcon} />
        <View style={styles.CardNumberView}>
          <Text style={styles.CardNumberPublicFont}>Add a new card</Text>
        </View>
      </View>
      <Image source={ArrowRightIcon} />
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
    width: width - 90,
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
  CardNumberPublicFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
});

export default AddNewCardItem;
