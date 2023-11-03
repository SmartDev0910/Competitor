import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLOR_EVENT_BORDER, COLOR_WHITE} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const AuthorityPane = ({image, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.TitleView}>
        <Text style={styles.TitleFont}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    height: 55,
    alignItems: 'center',
    marginTop: 20,
  },
  Image: {
    width: 24,
    height: 24,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  TitleView: {
    width: width - 104,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AuthorityPane;
