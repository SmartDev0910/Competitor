import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_SKY,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';
import Badge from '../common/Badge';
import {PlusIcon, MinusSignOutlinedIcon} from '../../constants/icons';
import PurchaseTicketItem from './PurchaseTicketItem';
import PurchaseTicketsData from '../../constants/events/purchaseTickets';

const PurchaseSplitPaymentsTicketsPane = ({collapsed, onCollapse}) => {
  return (
    <View style={styles.Wrapper}>
      <View
        style={[
          styles.TitleBarWrapper,
          collapsed ? styles.CollpasedTitleBarWrapper : {},
        ]}>
        <Text
          style={[
            styles.TitleFont,
            collapsed ? {} : styles.CollapsedTitleFont,
          ]}>
          Tickets
        </Text>
        <View style={styles.ActionView}>
          <Text style={styles.ActionTextFont}>Edit</Text>
          <Badge text={'4 tickets, $320'} style={styles.BadgeView} />
          <TouchableOpacity
            style={styles.CollapseIconView}
            onPress={onCollapse}>
            <Image
              source={collapsed ? PlusIcon : MinusSignOutlinedIcon}
              style={styles.PlusIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {collapsed ? (
        ''
      ) : (
        <>
          {PurchaseTicketsData.map((item, index) => {
            return (
              <PurchaseTicketItem
                key={index}
                title={item.title}
                price={item.price}
                tickets={item.tickets}
                members={item.members}
              />
            );
          })}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: 'column',
  },
  TitleBarWrapper: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CollpasedTitleBarWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
  },
  TitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 25,
    color: COLOR_FONT_DEFAULT,
  },
  CollapsedTitleFont: {
    fontFamily: FONT_BOLD,
    color: COLOR_PINK,
  },
  ActionView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ActionTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 25,
    color: COLOR_SKY,
  },
  BadgeView: {width: 124},
  PlusIcon: {},
  ContentView: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderColor: COLOR_EVENT_BORDER,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'column',
  },
  ContentTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContentTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginVertical: 20,
  },
  ContentRowView: {
    flexDirection: 'column',
    gap: 6,
  },
  ContentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
  },
  CollapseIconView: {
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PurchaseSplitPaymentsTicketsPane;
