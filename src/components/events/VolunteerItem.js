import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const VolunteerItem = ({avatar, fullName, status, style}) => {
  return (
    <View style={[styles.View, style]}>
      <Image source={avatar} style={styles.Avatar} />
      <View style={styles.DetailView}>
        <Text style={styles.NameFont}>{fullName}</Text>
        <View style={styles.StatusView}>
          <Text style={styles.StatusTextFont}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    padding: 12,
    marginVertical: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    gap: 12,
    alignItems: 'center',
    height: 65,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  NameFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    flexWrap: 'wrap',
    marginVertical: 2,
  },
  DetailView: {
    flexDirection: 'column',
  },
  StatusView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  StatusTextFont: {
    color: COLOR_FONT_COMMENT,
    fontFamily: FONT_REGULAR,
    fontSize: 12,
  },
});

export default VolunteerItem;
