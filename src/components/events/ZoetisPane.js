import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {ZoetisImage} from '../../constants/images';

const ZoetisPane = ({style}) => {
  return (
    <View style={[styles.Wrapper, style]}>
      <Image source={ZoetisImage} style={StyleSheet.ZoetisImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    height: 60,
    width: 255,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
  ZoetisImage: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
});

export default ZoetisPane;
