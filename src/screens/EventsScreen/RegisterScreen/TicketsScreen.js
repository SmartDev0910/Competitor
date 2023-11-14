import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_FONT_COMMENT,
} from '../../../constants/colors';
import {FONT_REGULAR} from '../../../constants/fonts';
import TicketsData from '../../../constants/events/ticketsData';
import TicketsPaneItem from '../../../components/events/TicketsPaneItem';
import Divider from '../../../components/home/Divider';

const TicketsScreen = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate('RegisterPaperworkScreen');
  };

  const handleSaveAndExit = () => {};

  const handleCancel = () => {};

  return (
    <View style={styles.Wrapper}>
      <Appbar title="Tickets" navigation={navigation} />
      <ScrollView>
        <View style={styles.ContentView}>
          <View style={styles.TicketsWrapper}>
            {TicketsData.map((item, ticketIndex) => (
              <React.Fragment key={'ticket' + ticketIndex}>
                <TicketsPaneItem
                  title={item.subTitle}
                  available={item.available}
                  price={item.price}
                  amount={item.amount}
                  info={item.info}
                />
                <Divider style={styles.Divider} />
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.ActionButtonView}>
        <Pressable style={[styles.Button, styles.ButtonCancel]}>
          <Text style={[styles.TextStyle, styles.TextCancel]}>Save & Exit</Text>
        </Pressable>
        <Pressable
          style={[styles.Button, styles.ButtonApply]}
          onPress={handleNext}>
          <Text style={[styles.TextStyle, styles.TextApply]}>{'Next >'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
  },
  ContentView: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 90,
  },
  Button: {
    borderRadius: 10,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 60) / 2,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
  },
  ButtonReadyApply: {
    borderWidth: 1,
    borderColor: COLOR_PINK,
  },
  ButtonCancel: {
    backgroundColor: COLOR_WHITE,
    color: COLOR_FONT_COMMENT,
  },
  TextStyle: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  TextCancel: {
    color: COLOR_BUTTON_DEFAULT,
  },
  TextApply: {
    color: COLOR_WHITE,
  },
  TextReadyApply: {
    color: COLOR_PINK,
  },
  Divider: {
    height: 1,
    backgroundColor: COLOR_EVENT_BORDER,
    marginVertical: 20,
  },
  TicketsWrapper: {
    borderWidth: 1,
    borderColor: COLOR_EVENT_BORDER,
    borderRadius: 10,
    padding: 18,
    flexDirection: 'column',
    marginVertical: 5,
  },
  ActionButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: COLOR_EVENT_BORDER,
    width: width - 48,
    marginLeft: 24,
    paddingVertical: 12,
    backgroundColor: COLOR_WHITE,
  },
});

export default TicketsScreen;
