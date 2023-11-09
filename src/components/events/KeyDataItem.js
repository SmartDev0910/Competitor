import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLOR_EVENT_BORDER, COLOR_FONT_DEFAULT} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const KeyDataItem = ({
  icon,
  itemTitle1,
  itemValue1,
  itemTitle2,
  itemValue2,
  title,
}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.TitleView}>
        <Image source={icon} style={styles.TitleIcon} />
        <Text style={styles.TitleFont}>{title}</Text>
      </View>
      <View style={styles.ItemRowView}>
        <Text style={styles.ItemTitleFont}>{itemTitle1}</Text>
        <Text style={styles.ItemValueFont}>{itemValue1}</Text>
      </View>
      <View style={styles.ItemRowView}>
        <Text style={styles.ItemTitleFont}>{itemTitle2}</Text>
        <Text style={styles.ItemValueFont}>{itemValue2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_EVENT_BORDER,
    marginBottom: 8,
  },
  TitleView: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  TitleIcon: {
    width: 24,
    height: 24,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  ItemRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ItemTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  ItemValueFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
});

export default KeyDataItem;
