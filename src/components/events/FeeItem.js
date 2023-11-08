import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {
  ClockIcon,
  MagneticCardWeakIcon,
  MoneyBagIcon,
  OkSelectedIcon,
  OkUnselectedIcon,
} from '../../constants/icons';

const FeeItem = ({title, detail, price, selected, scratched, onPress}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.Wrapper,
          scratched ? styles.ScratchedWrapper : styles.DefaultWrapper,
        ]}
        onPress={onPress}>
        <View>
          <TouchableOpacity>
            <Text style={styles.TitleFont}>{title}</Text>
          </TouchableOpacity>
          <View style={styles.DetailView}>
            <Image source={MoneyBagIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{price}</Text>
            <Image source={MagneticCardWeakIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{detail}</Text>
          </View>
        </View>
        {scratched ? (
          <Image
            source={selected ? OkSelectedIcon : OkUnselectedIcon}
            style={styles.OkUnselectedIcon}
          />
        ) : (
          ''
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 5,
    height: 65,
    marginHorizontal: 24,
    paddingHorizontal: 24,
  },
  ScratchedWrapper: {
    borderColor: COLOR_FONT_DEFAULT,
  },
  DefaultWrapper: {
    borderColor: COLOR_EVENT_BORDER,
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  DetailView: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  DetailIcon: {
    width: 14,
    height: 14,
  },
  DetailFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_COMMENT,
  },
  OkUnselectedIcon: {
    width: 24,
    height: 24,
    marginTop: 10,
  },
});

export default FeeItem;
