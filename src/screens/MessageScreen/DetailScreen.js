import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  COLOR_EVENT_BORDER,
  COLOR_FONT_DEFAULT,
  COLOR_WHITE,
} from '../../constants/colors';
import {AlexLeeImage} from '../../constants/images';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowLeftIcon} from '../../constants/icons';
import ImageButton from '../../components/home/ImageButton';
import HistoriesData from '../../constants/message/histories';
import MessageHistoryItem from '../../components/message/MessageHistoryItem';
import MessageText from '../../components/message/MessageText';

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.ShadowWrapper}>
        <View style={styles.Appbar}>
          <ImageButton
            source={ArrowLeftIcon}
            onPress={() => navigation.goBack()}
            style={styles.BackButton}
          />
          <Image source={AlexLeeImage} style={styles.Avatar} />
          <Text style={styles.NameTextFont}>Ashfak Sayem</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.ContentView}>
          {HistoriesData?.map((item, index) => {
            return (
              <MessageHistoryItem
                key={index}
                avatar={item.avatar}
                from={item.from}
                datetime={item.datetime}
                content={item.content}
                attachFiles={item.attachFiles}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.BottomView}>
        <MessageText style={[styles.MessageText]} />
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  ShadowWrapper: {
    shadowColor: COLOR_EVENT_BORDER,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: COLOR_WHITE,
    height: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  Appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    gap: 12,
  },
  Avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  BackButton: {
    width: 22,
    height: 22,
  },
  NameTextFont: {
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    color: COLOR_FONT_DEFAULT,
  },
  ContentView: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 20,
    padding: 50,
  },
  MessageText: {
    width: width - 140,
    height: 50,
  },
  BottomView: {
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 10,
  },
});

export default DetailScreen;
