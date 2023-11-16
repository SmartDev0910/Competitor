import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

const DayScheduleItem = ({time, status, statusInfo, style}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handlePress = () => {
    setShowDetail(!showDetail);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {showDetail ? (
        <View style={[styles.Wrapper, styles.DetailView]}>
          <View style={styles.RowView}>
            <Text style={styles.DetailTextFont}>{time}</Text>
            <Text style={styles.DetailTextFont}>{status}</Text>
          </View>
          <View style={styles.RowView}>
            <Text style={styles.TimeTextFont}>{'Code'}</Text>
            <Text style={styles.TimeTextFont}>{'1904'}</Text>
          </View>
          <View style={styles.RowView}>
            <Text style={styles.TimeTextFont}>{'Location'}</Text>
            <Text style={styles.TimeTextFont}>{'Ring 1'}</Text>
          </View>
          <View style={styles.RowView}>
            <Text style={styles.TimeTextFont}>{'Discipline'}</Text>
            <Text style={styles.TimeTextFont}>{'Hunter'}</Text>
          </View>
          <View style={styles.RowView}>
            <Text style={styles.TimeTextFont}>{'Status'}</Text>
            <Text style={styles.TimeTextFont}>{'Flexible'}</Text>
          </View>
          <View style={styles.RowView}>
            <Text style={styles.TimeTextFont}>{'Notes'}</Text>
          </View>
          <View style={styles.RowView}>
            <Text style={[styles.StatusInfoTextFont, {textAlign: 'left'}]}>
              {
                'Session 1 will start on time, no excuses. if yo are late, you will not be allowed to ride.'
              }
            </Text>
          </View>
        </View>
      ) : (
        <View style={[styles.Wrapper, styles.DefaultView]}>
          <Text style={styles.TimeTextFont}>{time}</Text>
          <View style={styles.StatusView}>
            <Text style={styles.StatusTextFont}>{status}</Text>
            <Text style={styles.StatusInfoTextFont}>{statusInfo}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR_EVENT_BORDER,
    backgroundColor: COLOR_WHITE,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  DefaultView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
  DetailView: {
    paddingVertical: 20,
    flexDirection: 'column',
  },
  RowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TimeTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 34,
  },
  StatusTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 20,
    textAlign: 'right',
  },
  StatusInfoTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_COMMENT,
    textAlign: 'right',
  },
  StatusView: {
    flexDirection: 'column',
  },
  DetailTextFont: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
    lineHeight: 34,
    color: COLOR_FONT_DEFAULT,
  },
});

export default DayScheduleItem;
