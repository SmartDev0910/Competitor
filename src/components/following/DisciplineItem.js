import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {FONT_REGULAR} from '../../constants/fonts';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../constants/colors';
import {OkSelectedIcon} from '../../constants/icons';

const DisciplineItem = ({
  icon,
  text,
  selected,
  selectedIcon,
  onPress,
  style,
}) => {
  return (
    <>
      <TouchableOpacity style={[styles.View, style]} onPress={onPress}>
        <View style={styles.LeftView}>
          <Image source={selected ? selectedIcon : icon} style={styles.Icon} />
          <Text
            style={[
              styles.Text,
              selected ? styles.SelectedText : styles.DefaultText,
            ]}>
            {text}
          </Text>
        </View>
        {selected ? (
          <Image source={OkSelectedIcon} style={styles.SelectedIcon} />
        ) : (
          ''
        )}
      </TouchableOpacity>
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    marginVertical: 6,
  },
  Icon: {
    width: 23,
    height: 22,
  },
  Text: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    marginLeft: 24,
  },
  SelectedText: {
    color: COLOR_FONT_DEFAULT,
  },
  DefaultText: {
    color: COLOR_FONT_COMMENT,
  },
  LeftView: {
    flexDirection: 'row',
    width: width - 150,
  },
  SelectedIcon: {
    width: 24,
    height: 24,
  },
});

export default DisciplineItem;
