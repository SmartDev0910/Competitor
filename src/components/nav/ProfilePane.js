import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_PINK_WEAK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  DataTransferIcon,
  DataTransferOutlinedIcon,
} from '../../constants/icons';

const ProfilePane = ({image, fullName, statusText, onPress}) => {
  return (
    <View style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{fullName}</Text>
        <View style={styles.StatusTextView}>
          <Text style={styles.StatusTextFont}>{statusText}</Text>
        </View>
      </View>
      <View style={styles.ActionButtonView}>
        <TouchableOpacity style={styles.DataTransferButton}>
          <Image
            source={DataTransferOutlinedIcon}
            style={styles.DataTransferOutlinedIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    height: 55,
    paddingHorizontal: 24,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    width: width - 150,
    flexWrap: 'wrap',
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  StatusTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  DataTransferOutlinedIcon: {
    width: 20,
    height: 20,
  },
  DataTransferButton: {
    backgroundColor: COLOR_PINK_WEAK,
    width: 30,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  ActionButtonView: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default ProfilePane;
