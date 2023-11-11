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
import {
  JaylinWilliamsImage,
  JenniferTrotterImage,
  TammyWilliamsImage,
  UserOval1Image,
} from '../../constants/images';

const SplitPaymentsSummaryPane = ({collapsed, onCollapse}) => {
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
          Summary
        </Text>
        <View style={styles.ActionView}>
          <Badge text={'3 recipients'} style={styles.BadgeView} />
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
            <View style={styles.ContentProfileView}>
              <Image
                source={TammyWilliamsImage}
                style={styles.ContentProfileImage}
              />
              <View style={styles.ContentProfileInfoView}>
                <Text style={styles.ContentProfileNameFont}>
                  Tammy Williams
                </Text>
                <Text style={styles.ContentProfileStatusFont}>
                  Mr Tobins • 3 signers
                </Text>
              </View>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Classes</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Fees</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Tickets</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Taxes</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTotalTextFont}>Total</Text>
              <Text style={styles.ContentTotalTextFont}>$0</Text>
            </View>
          </View>
          <View style={styles.ContentView}>
            <View style={styles.ContentProfileView}>
              <Image
                source={JaylinWilliamsImage}
                style={styles.ContentProfileImage}
              />
              <View style={styles.ContentProfileInfoView}>
                <Text style={styles.ContentProfileNameFont}>
                  Jaylin Williams
                </Text>
                <Text style={styles.ContentProfileStatusFont}>
                  Mr Tobins • 3 signers
                </Text>
              </View>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Classes</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Fees</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Tickets</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Taxes</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTotalTextFont}>Total</Text>
              <Text style={styles.ContentTotalTextFont}>$0</Text>
            </View>
          </View>
          <View style={styles.ContentView}>
            <View style={styles.ContentProfileView}>
              <Image
                source={JenniferTrotterImage}
                style={styles.ContentProfileImage}
              />
              <View style={styles.ContentProfileInfoView}>
                <Text style={styles.ContentProfileNameFont}>
                  Jenney Trotter
                </Text>
                <Text style={styles.ContentProfileStatusFont}>
                  Mr Tobins • 3 signers
                </Text>
              </View>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Classes</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Fees</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Tickets</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentItemFont}>Taxes</Text>
              <Text style={styles.ContentItemFont}>$0</Text>
            </View>
            <View style={styles.ContentRowView}>
              <Text style={styles.ContentTotalTextFont}>Total</Text>
              <Text style={styles.ContentTotalTextFont}>$0</Text>
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
    marginVertical: 8,
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

export default SplitPaymentsSummaryPane;
