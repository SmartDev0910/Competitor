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
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {OkSelectedIcon} from '../../constants/icons';

const SelectableNationalityItem = ({icon, country, selected, onPress}) => {
  return (
    <TouchableOpacity style={styles.View} onPress={onPress}>
      <Image source={icon} style={styles.CountryIcon} />
      <View style={styles.DetailView}>
        <Text
          style={[
            styles.CountryTextFont,
            selected ? styles.SelectedTextFont : styles.DefaultTextFont,
          ]}>
          {country}
        </Text>
      </View>
      {selected ? (
        <Image source={OkSelectedIcon} style={styles.SelectedIcon} />
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 20,
  },
  CountryIcon: {
    width: 28,
    height: 20,
  },
  CountryTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  SelectedTextFont: {
    color: COLOR_FONT_DEFAULT,
  },
  DefaultTextFont: {
    color: COLOR_FONT_COMMENT,
  },
  DetailView: {
    flexDirection: 'row',
    width: width - 150,
  },
  SelectedIcon: {
    width: 24,
    height: 24,
  },
});

export default SelectableNationalityItem;
