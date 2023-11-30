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
import {ArrowDownIcon, ArrowUpPinkIcon} from '../../constants/icons';
import Divider from '../home/Divider';

const BillsFeesPane = ({collapsed, onCollapse}) => {
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
          Fees
        </Text>
        <View style={styles.ActionView}>
          <Text style={styles.ActionTextFont}>Edit</Text>
          <Badge text={'8 fees, $6,750'} style={styles.BadgeView} />
          <TouchableOpacity
            style={styles.CollapseIconView}
            onPress={onCollapse}>
            <Image
              source={collapsed ? ArrowDownIcon : ArrowUpPinkIcon}
              style={styles.ArrowDownIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {collapsed ? (
        ''
      ) : (
        <>
          <View style={styles.ContentView}>
            <View style={styles.ContentTitleView}>
              <Text style={styles.ContentTitleFont}>Feed</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTextFont}>$45 • 3 grain</Text>
              <Text style={styles.ContentTextFont}>$45 • 3 TnA hay</Text>
            </View>
            <View style={styles.ContentTitleView}>
              <Text style={styles.ContentTitleFont}>Bedding</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTextFont}>$45 • 3 shavings</Text>
              <Text style={styles.ContentTextFont}>$45 • 3 hay</Text>
            </View>
            <View style={styles.ContentTitleView}>
              <Text style={styles.ContentTitleFont}>Stalls</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTextFont}>
                $600 • 3 temporary stalls, 3 days
              </Text>
              <Text style={styles.ContentTextFont}>
                $4000 • 2 permanent stalls, 3 days
              </Text>
            </View>
            <View style={styles.ContentTitleView}>
              <Text style={styles.ContentTitleFont}>Other fees</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTextFont}>$180 • 3 paddock fee</Text>
              <Text style={styles.ContentTextFont}>$600 • 3 RV hookup</Text>
            </View>

            <View style={styles.ContentTitleView}>
              <Text style={styles.ContentTitleFont}>Governance fees</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTextFont}>
                $24 • USEF fee, 3 horses
              </Text>
              <Text style={styles.ContentTextFont}>
                $45 • USEF drug fee, 3 horses
              </Text>
              <Text style={styles.ContentTextFont}>
                $21 • USHJA fee, 3 horses
              </Text>
            </View>
          </View>
          <Divider style={styles.Divider} />
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
  ArrowDownIcon: {},
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

export default BillsFeesPane;
