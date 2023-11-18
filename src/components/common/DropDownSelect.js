import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_SEARCH_TEXT,
  COLOR_WHITE,
} from '../../constants/colors';
import {ArrowDownIcon} from '../../constants/icons';
import {FONT_REGULAR} from '../../constants/fonts';

const DropDownSelect = ({
  icon,
  selectedIcon,
  options,
  placeholder,
  value,
  onPress,
}) => {
  const [showDropDownView, setShowDropDownView] = React.useState(false);

  const handleDropDownView = () => {
    setShowDropDownView(true);
  };

  const handleDropDownItem = index => {
    onPress(index);
    setShowDropDownView(false);
  };

  return (
    <View style={styles.Wrapper}>
      <Pressable style={styles.DefaultWrapper} onPress={handleDropDownView}>
        <View style={styles.TitleView}>
          <Image
            source={value !== '' ? selectedIcon : icon}
            style={styles.LeftIcon}
          />
          <Text
            style={[
              value !== '' ? styles.TextFont : styles.PlaceholderTextFont,
            ]}>
            {value !== '' ? value : placeholder}
          </Text>
        </View>
        <Image source={ArrowDownIcon} style={styles.RightIcon} />
      </Pressable>
      {showDropDownView ? (
        <View style={styles.DropDownView}>
          {options?.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={[
                  styles.ItemView,
                  value === item
                    ? styles.SelectedItemView
                    : styles.DefaultItemView,
                ]}
                onPress={() => handleDropDownItem(index)}>
                <Text
                  style={[
                    styles.ItemTextFont,
                    value === item
                      ? styles.SelectedItemTextFont
                      : styles.DefaultItemTextFont,
                  ]}>
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 18,
    marginVertical: 5,
  },
  DefaultWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  TitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  LeftIcon: {
    width: 18,
    height: 20,
  },
  PlaceholderTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 23,
    color: COLOR_FONT_COMMENT,
  },
  RightIcon: {},
  ItemView: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  SelectedItemView: {
    backgroundColor: COLOR_SEARCH_TEXT,
  },
  DefaultItemView: {
    backgroundColor: COLOR_WHITE,
  },
  ItemTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  SelectedItemTextFont: {
    color: COLOR_FONT_DEFAULT,
  },
  DefaultItemTextFont: {
    color: COLOR_FONT_COMMENT,
  },
  DropDownView: {
    marginBottom: 16,
  },
  TextFont: {color: COLOR_FONT_DEFAULT},
});

export default DropDownSelect;
