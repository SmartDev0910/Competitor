import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Switch} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_SWITCH_FALSE,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';

const SettingItem = ({icon, title, description, active}) => {
  const [isEnabled, setIsEnabled] = React.useState(active);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.View}>
      <Image source={icon} style={styles.Icon} />
      <View style={styles.DetailView}>
        <Text style={styles.ContentTitleFont}>{title}</Text>
        <Text style={styles.ContentDescFont}>{description}</Text>
      </View>
      <View style={styles.RightView}>
        <Switch
          trackColor={{false: COLOR_SWITCH_FALSE, true: COLOR_PINK}}
          thumbColor={COLOR_WHITE}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_EVENT_BORDER,
    paddingVertical: 18,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  ContentTitleFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    flexWrap: 'wrap',
    color: COLOR_FONT_DEFAULT,
  },
  ContentDescFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    flexWrap: 'wrap',
    color: COLOR_FONT_COMMENT,
  },
  DetailView: {
    flexDirection: 'column',
    width: width - 160,
    gap: 5,
  },
  MoreIcon: {
    width: 24,
    height: 24,
  },
  RightView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: 60,
  },
  TimeTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
  },
});

export default SettingItem;
