import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import Appbar from './Appbar';
import {
  COLOR_BUTTON_CANCEL,
  COLOR_BUTTON_DEFAULT,
  COLOR_EVENT_BORDER,
  COLOR_PINK,
  COLOR_WHITE,
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
          <Pressable
            style={[styles.Button, styles.ButtonApply]}
            onPress={handleNext}>
            <Text style={[styles.TextStyle, styles.TextApply]}>{'Next >'}</Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonReadyApply]}
            onPress={handleSaveAndExit}>
            <Text style={[styles.TextStyle, styles.TextReadyApply]}>
              {'SAVE & EXIT'}
            </Text>
          </Pressable>
          <Pressable
            style={[styles.Button, styles.ButtonCancel]}
            onPress={handleCancel}>
            <Text style={[styles.TextStyle, styles.TextCancel]}>Cancel</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
  },
  ContentView: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  Button: {
    borderRadius: 10,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  ButtonApply: {
    backgroundColor: COLOR_PINK,
    marginTop: 20,
  },
  ButtonReadyApply: {
    borderWidth: 1,
    borderColor: COLOR_PINK,
  },
  ButtonCancel: {
    backgroundColor: COLOR_BUTTON_CANCEL,
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
});

export default TicketsScreen;
