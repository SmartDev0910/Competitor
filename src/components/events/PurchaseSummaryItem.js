import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {JaylinWilliamsImage} from '../../constants/images';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_SKY,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const PurchaseSummaryItem = ({
  image,
  name,
  tickets_count,
  tickets_price,
  taxes,
}) => {
  return (
    <View style={styles.ContentView}>
      <View style={styles.ContentProfileView}>
        <Image source={image} style={styles.ContentProfileImage} />
        <View style={styles.ContentProfileInfoView}>
          <Text style={styles.ContentProfileNameFont}>{name}</Text>
          <Text style={styles.ContentProfileStatusFont}>
            {`${tickets_count} tickets`}
          </Text>
        </View>
      </View>
      <View style={styles.ContentRowView}>
        <Text style={styles.ContentItemFont}>Tickets</Text>
        <Text style={styles.ContentItemFont}>{`$${tickets_price}`}</Text>
      </View>
      <View style={styles.ContentRowView}>
        <Text style={styles.ContentItemFont}>Taxes</Text>
        <Text style={styles.ContentItemFont}>{`$${taxes}`}</Text>
      </View>
      <View style={styles.ContentRowView}>
        <Text style={styles.ContentTotalTextFont}>Total</Text>
        <Text style={styles.ContentTotalTextFont}>{`$${
          tickets_price + taxes
        }`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContentView: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderColor: COLOR_EVENT_BORDER,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
    marginVertical: 8,
  },
  ContentProfileView: {
    flexDirection: 'row',
    gap: 10,
    height: 55,
    alignItems: 'center',
  },
  ContentProfileImage: {
    width: 45,
    height: 45,
  },
  ContentProfileInfoView: {
    flexDirection: 'column',
    gap: 4,
    justifyContent: 'center',
  },
  ContentProfileNameFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  ContentProfileStatusFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_COMMENT,
  },
  ContentRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ContentItemFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  ContentTotalTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    color: COLOR_SKY,
    lineHeight: 34,
  },
});

export default PurchaseSummaryItem;
