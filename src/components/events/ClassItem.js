import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';
import {
  ClockIcon,
  MoneyBagIcon,
  OkSelectedIcon,
  OkUnselectedIcon,
  YearOfHorseIcon,
} from '../../constants/icons';

const ClassItem = ({
  title,
  match,
  date,
  price,
  selected,
  scratched,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.Wrapper,
          scratched ? styles.ScratchedWrapper : styles.DefaultWrapper,
        ]}
        onPress={onPress}>
        <View style={styles.ContentView}>
          <View>
            <Text style={styles.TitleFont}>{title}</Text>
          </View>
          <View style={styles.DetailView}>
            <Image source={YearOfHorseIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{match}</Text>
            <Image source={ClockIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{date}</Text>
            <Image source={MoneyBagIcon} style={styles.DetailIcon} />
            <Text style={styles.DetailFont}>{price}</Text>
          </View>
        </View>
        {scratched ? (
          <Image
            source={selected ? OkSelectedIcon : OkUnselectedIcon}
            style={styles.OkUnselectedIcon}
          />
        ) : (
          ''
        )}
      </TouchableOpacity>
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 5,
    height: 65,
    marginHorizontal: 24,
    paddingHorizontal: 24,
  },
  ScratchedWrapper: {
    borderColor: COLOR_FONT_DEFAULT,
  },
  DefaultWrapper: {
    borderColor: COLOR_EVENT_BORDER,
  },
  ContentView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  TitleFont: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 15,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
    width: width - 110,
  },
  DetailView: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
  OkUnselectedIcon: {
    width: 24,
    height: 24,
    marginTop: 10,
  },
});

export default ClassItem;
