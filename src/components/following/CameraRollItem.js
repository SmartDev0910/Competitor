import React from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';
import {CheckmarkImage} from '../../constants/images';

const CameraRollItem = ({style, selected, image, onPress}) => {
  return (
    <Pressable style={[styles.Wrapper, style]} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      {selected ? (
        <Image source={CheckmarkImage} style={styles.CheckmarkImage} />
      ) : (
        ''
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Wrapper: {},
  Image: {},
  CheckmarkImage: {
    position: 'absolute',
  },
});

export default CameraRollItem;
