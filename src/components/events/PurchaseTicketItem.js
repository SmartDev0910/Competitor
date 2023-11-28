import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowDownOutlinedIcon} from '../../constants/icons';
import TeamMemberItem from './TeamMemberItem';

const PurchaseTicketItem = ({
  title,
  price,
  tickets,
  members,
  onAddMemberPress,
}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.DetailView}>
        <View style={styles.ContentTitleView}>
          <Text style={styles.ContentTitleFont}>{title}</Text>
        </View>
        <View style={styles.ContentDescInfoView}>
          <Text style={styles.ContentTextFont}>
            {`$${price * tickets} - ${tickets} tickets, $${price} per ticket`}
          </Text>
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
      {Array.from({length: tickets}, (_, index) => {
        return (
          <TouchableOpacity
            style={styles.ActionView}
            onPress={onAddMemberPress}
            key={index}>
            <Text style={styles.AddMemberFont}>Select bill recipient...</Text>
            <Image
              source={ArrowDownOutlinedIcon}
              style={styles.ArrowDownOutlinedIcon}
            />
          </TouchableOpacity>
        );
      })}
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
  DetailView: {
    flexDirection: 'column',
  },
  ActionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    height: 55,
    marginTop: 10,
  },
  AddMemberFont: {
    color: COLOR_PINK,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
  },
  ArrowDownOutlinedIcon: {
    right: 16,
    top: 24,
    position: 'absolute',
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
  ContentDescInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ContentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
  },
});

export default PurchaseTicketItem;
