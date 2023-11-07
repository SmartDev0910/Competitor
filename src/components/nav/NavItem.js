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
  COLOR_FONT_DEFAULT,
  COLOR_SEARCH_TEXT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowRightIcon} from '../../constants/icons';

const NavItem = ({icon, text, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.View, style]} onPress={onPress}>
      <View style={styles.IconView}>
        <Image source={icon} style={styles.Icon} />
      </View>
      <View style={styles.DetailView}>
        <Text style={styles.TextFont}>{text}</Text>
      </View>
      <Image source={ArrowRightIcon} style={styles.ArrowRightIcon} />
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    padding: 6,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
    height: 55,
  },
  IconView: {
    width: 45,
    height: 45,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_SEARCH_TEXT,
  },
  Icon: {
    width: 20,
    height: 20,
  },
  TextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    width: width - 142,
    flexWrap: 'wrap',
    marginVertical: 2,
    color: COLOR_FONT_DEFAULT,
  },
  ArrowRightIcon: {
    width: 5,
    height: 8,
  },
});

export default NavItem;
