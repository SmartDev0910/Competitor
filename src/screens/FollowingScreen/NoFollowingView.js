import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FollowerSkeleton from '../../components/following/FollowerSkeleton';
import {COLOR_BLACK} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {UserImage, UserSelectedImage} from '../../constants/images';

const NoFollowingView = () => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.TitleFont}>You are not following anyone</Text>
      <View style={styles.SkeletonView}>
        <FollowerSkeleton image={UserImage} style={styles.FollowerSkeleton} />
        <FollowerSkeleton
          image={UserSelectedImage}
          style={styles.FollowerSkeleton}
        />
        <FollowerSkeleton image={UserImage} style={styles.FollowerSkeleton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 80,
  },
  TitleFont: {
    color: COLOR_BLACK,
    textAlign: 'center',
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 62,
  },
  SkeletonView: {
    width: '100%',
  },
  FollowerSkeleton: {
    marginBottom: 10,
  },
});

export default NoFollowingView;
