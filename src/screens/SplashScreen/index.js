import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {COLOR_PINK} from '../../constants/colors';
import {TransparentLogoImage} from '../../constants/images';

function SplashScreen() {
  return (
    <View style={styles.Wrapper}>
      <Image
        source={TransparentLogoImage}
        style={styles.TransparentLogoImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_PINK,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TransparentLogoImage: {
    width: 180,
    height: 180,
  },
});

export default SplashScreen;
