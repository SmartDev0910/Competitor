import React, { useRef, useEffect } from 'react';
import { Animated, Text, Image, View, Dimensions, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../constants/colors';
import { BlackLogoImage } from '../../constants/images';
import { FONT_REGULAR } from '../../constants/fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const marginTopAnim = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: windowWidth,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.delay(1000),
        Animated.timing(marginTopAnim, {
          toValue: -windowHeight / 2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [fadeAnim, scaleAnim, marginTopAnim]);

  return (
    <View style={styles.Wrapper}>
      <Animated.View
        style={[
          styles.LogoView,
          {
            transform: [
              { scale: scaleAnim },
              { translateY: marginTopAnim },
            ],
            opacity: fadeAnim,
          },
        ]}
      >
        <Image source={BlackLogoImage} style={styles.LogoImage} />
        <Text style={styles.LogoTextFont}>pegasus</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_BLACK,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  LogoView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  LogoImage: {
    width: 130,
    height: 130,
  },
  LogoTextFont: {
    color: COLOR_WHITE,
    fontFamily: FONT_REGULAR,
    fontSize: 24,
    marginTop: 12,
  },
});

export default SplashScreen;