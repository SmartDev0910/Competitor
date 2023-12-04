import React, { useRef, useEffect } from 'react';
import { Animated, Text, Image, View, Dimensions, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../constants/colors';
import { BlackLogoImage } from '../../constants/images';
import { FONT_REGULAR } from '../../constants/fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(300),
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 30, //Increase it as per requirement
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={BlackLogoImage}
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
            opacity: logoOpacity,
          },
        ]}
      />
      <Animated.Text style={[styles.text, { opacity: textOpacity }]}>pegasus</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 40,
    color: COLOR_WHITE,
    fontFamily: FONT_REGULAR,
    fontSize: 24,
  },
});

export default SplashScreen;