import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_FONT_COMMENT,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_REGULAR, FONT_SEMI_BOLD} from '../../constants/fonts';

const MessageHistoryItem = ({avatar, from, datetime, content, attachFiles}) => {
  return (
    <View style={styles.View}>
      <Image source={avatar} style={styles.Image} />
      <View style={styles.DetailView}>
        <View style={styles.TitleRowView}>
          <Text style={styles.FromTextFont}>{from}</Text>
          <Text style={styles.DatetimeTextFont}>{datetime}</Text>
        </View>
        <Text style={styles.ContentTextFont}>{content}</Text>
        <View style={styles.AttachFileView}>
          {attachFiles?.map((item, index) => {
            return (
              <Image source={item} key={index} style={styles.AttachFileImage} />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  View: {
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    gap: 12,
  },
  Image: {
    width: 30,
    height: 30,
  },
  FromTextFont: {
    fontFamily: FONT_SEMI_BOLD,
    color: COLOR_FONT_DEFAULT,
    fontSize: 16,
    lineHeight: 24,
  },
  DatetimeTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: COLOR_FONT_COMMENT,
    lineHeight: 24,
  },
  ContentTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    flexWrap: 'wrap',
    width: width - 100,
    color: COLOR_FONT_DEFAULT,
    lineHeight: 24,
  },
  DetailView: {
    flexDirection: 'column',
  },
  TitleRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  AttachFileImage: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  AttachFileView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
});

export default MessageHistoryItem;
