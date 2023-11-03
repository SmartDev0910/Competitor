import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLOR_SKELETON_BORDER} from '../../constants/colors';

const FollowerSkeleton = ({image, style}) => {
  return (
    <View style={[styles.Wrapper, style]}>
      <Image source={image} style={styles.Image} />
      <View style={styles.Skeleton}>
        <View style={styles.SkeletonItem}></View>
        <View style={styles.SkeletonItem}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderColor: COLOR_SKELETON_BORDER,
    borderRadius: 8,
    height: 58,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Image: {
    width: 36,
    height: 36,
  },
  Skeleton: {
    flexDirection: 'column',
    width: '78%',
  },
  SkeletonItem: {
    height: 5,
    borderRadius: 45,
    backgroundColor: COLOR_SKELETON_BORDER,
    marginVertical: 5,
  },
});

export default FollowerSkeleton;
