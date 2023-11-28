import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {JamesSpriegImage} from '../../constants/images';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowLeftIcon} from '../../constants/icons';
import ImageButton from '../../components/home/ImageButton';

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <ImageButton
          source={ArrowLeftIcon}
          onPress={() => navigation.goBack()}
          style={styles.BackButton}
        />
        <Image source={JamesSpriegImage} style={styles.Avatar} />
        <Text style={styles.NameTextFont}>Ashfak Sayem</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 20,
  },
  Appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    shadowColor: COLOR_BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    gap: 12,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  BackButton: {
    width: 22,
    height: 22,
  },
  NameTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
});

export default DetailScreen;
