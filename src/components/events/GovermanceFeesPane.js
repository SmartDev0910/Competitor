import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_SEARCH_TEXT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
  COLOR_EVENT_BORDER,
  COLOR_PINK,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {InfoIcon} from '../../constants/icons';
import Divider from '../home/Divider';

const GovermanceFeesPane = ({
  title,
  usefFee,
  usefDrugFee,
  ushjaHorseFee,
  info,
  onMorePress,
}) => {
  return (
    <View style={styles.Wrapper}>
      <View>
        <View>
          <Text style={styles.TitleFont}>{title}</Text>
        </View>
        <Divider style={styles.Divider} />
        <View style={styles.DetailView}>
          <View style={styles.DetailRowView}>
            <Text style={styles.ItemTitleFont}>USEF fee</Text>
            <Text style={styles.ItemValueFont}>{'$' + usefFee}</Text>
          </View>
          <View style={styles.DetailRowView}>
            <Text style={styles.ItemTitleFont}>USEF drug fee</Text>
            <Text style={styles.ItemValueFont}>{'$' + usefDrugFee}</Text>
          </View>
          <View style={styles.DetailRowView}>
            <Text style={styles.ItemTitleFont}>USHJA horse fee</Text>
            <Text style={styles.ItemValueFont}>{'$' + ushjaHorseFee}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.HelpRowView} onPress={onMorePress}>
        <Image source={InfoIcon} style={styles.HelpIcon} />
        <Text style={styles.HelpTextFont}>{info}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
    marginVertical: 5,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 18,
  },
  TitleFont: {
    fontFamily: FONT_BOLD,
    fontSize: 15,
    color: COLOR_PINK,
    lineHeight: 24,
    marginBottom: 10,
  },
  DetailView: {
    flexDirection: 'column',
  },
  DetailRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 25,
  },
  ItemValueFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 25,
  },
  HelpRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  HelpIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  HelpTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_BUTTON_DEFAULT,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginBottom: 20,
  },
});

export default GovermanceFeesPane;
