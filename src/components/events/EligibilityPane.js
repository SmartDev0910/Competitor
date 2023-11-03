import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {RubberStampIcon} from '../../constants/icons';

const EligibilityPane = ({image, title, statusText, onPress}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.DetailView}>
        <Text style={styles.TitleFont}>{title}</Text>
        <View style={styles.StatusTextView}>
          <Image source={RubberStampIcon} style={styles.RubberStampIcon} />
          <Text style={styles.StatusTextFont}>{statusText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flex: 1,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
  },
  Image: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  LocationFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    width: width - 150,
    flexWrap: 'wrap',
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
  },
  StatusTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RubberStampIcon: {
    width: 9,
    height: 11,
    marginRight: 6,
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
});

export default EligibilityPane;
