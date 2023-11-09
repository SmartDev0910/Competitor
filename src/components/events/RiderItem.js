import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {InfoIcon, PlusOutlinedIcon} from '../../constants/icons';
import TeamMemberItem from './TeamMemberItem';

const RiderItem = ({title, available, price, members, onAddMemberPress}) => {
  return (
    <View style={styles.Wrapper}>
      <View>
        <View>
          <Text style={styles.TitleFont}>{title}</Text>
        </View>
        <View style={styles.DetailView}>
          <View style={styles.DetailRowView}>
            <Text style={styles.ItemTitleFont}>Available</Text>
            <Text style={styles.ItemValueFont}>{available + ' remaining'}</Text>
          </View>
          <View style={styles.DetailRowView}>
            <Text style={styles.ItemTitleFont}>Price</Text>
            <Text style={styles.ItemValueFont}>{'$' + price}</Text>
          </View>
          {members &&
            members?.map((item, index) => {
              return (
                <TeamMemberItem
                  key={index}
                  fullName={item.fullName}
                  avatar={item.avatar}
                  status={item.status}
                  deletable={true}
                />
              );
            })}
        </View>
      </View>
      <TouchableOpacity style={styles.ActionView} onPress={onAddMemberPress}>
        <Image source={PlusOutlinedIcon} style={styles.PlusOutlinedIcon} />
        <Text style={styles.AddMemberFont}>Add Memeber</Text>
      </TouchableOpacity>
      <View style={styles.HelpRowView}>
        <Image source={InfoIcon} style={styles.HelpIcon} />
        <Text style={styles.HelpTextFont}>
          {'First come first served. No reserving s...More >'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 18,
    flexDirection: 'column',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
    marginBottom: 10,
  },
  DetailView: {
    flexDirection: 'column',
  },
  DetailIcon: {
    width: 14,
    height: 14,
  },
  DetailFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_COMMENT,
  },
  StatusFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_PINK,
  },
  ActionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_PINK,
    borderRadius: 10,
    height: 55,
    marginTop: 10,
  },
  AvailableActionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 55,
    backgroundColor: COLOR_PINK,
  },
  AssignFont: {
    color: COLOR_WHITE,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  AddMemberFont: {
    color: COLOR_PINK,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  PlusOutlinedIcon: {
    width: 24,
    height: 24,
    left: 16,
    top: 14,
    position: 'absolute',
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
});

export default RiderItem;
