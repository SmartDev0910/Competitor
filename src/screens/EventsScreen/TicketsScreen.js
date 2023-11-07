import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_FONT_DEFAULT, COLOR_WHITE} from '../../constants/colors';
import {FONT_REGULAR} from '../../constants/fonts';
import {ArrowLeftIcon} from '../../constants/icons';
import ImageButton from '../../components/home/ImageButton';
import TicketPane from '../../components/events/TicketPane';
import {ModalContext} from '../../providers/ModalProvider';

function TicketsScreen({navigation}) {
  const [, , ticketAssignName, , ticketAssignEmail, ,] =
    useContext(ModalContext);
  return (
    <View style={styles.Wrapper}>
      <View style={styles.ViewEventAppbar}>
        <View style={styles.BackView}>
          <ImageButton
            source={ArrowLeftIcon}
            onPress={() => navigation.goBack()}
            style={styles.BackButton}
          />
        </View>
        <Text style={styles.AppbarTitle}>WEF Winter Festival and c...</Text>
      </View>
      <View style={styles.ContentView}>
        <View style={styles.HeadWrapper}>
          <Text style={styles.HeadFont}>4 upcoming events</Text>
        </View>
        <TicketPane
          title="General entry - 1 day"
          status="Assigned"
          date="12th Nov, 2022"
          price="$75"
          fullName="Sam Baynes"
        />
        {ticketAssignName !== '' && ticketAssignEmail !== '' ? (
          <TicketPane
            title="General entry - 1 day"
            status="Assigned"
            date="12th Nov, 2022"
            price="$75"
            fullName={ticketAssignName}
          />
        ) : (
          <TicketPane
            title="General entry - 1 day"
            status="Available"
            date="12th Nov, 2022"
            price="$75"
          />
        )}
        <TicketPane
          title="General entry - 2 day"
          status="Assigned"
          date="12th Nov, 2022"
          price="75"
          fullName="Sam Baynes"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    paddingBottom: 20,
    backgroundColor: COLOR_WHITE,
    flex: 1,
  },
  ViewEventAppbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 20,
    gap: 5,
  },
  BackView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BackButton: {
    width: 22,
    height: 22,
  },
  AppbarTitle: {
    fontFamily: FONT_REGULAR,
    fontSize: 20,
    color: COLOR_FONT_DEFAULT,
  },
  HeadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  HeadFont: {
    color: COLOR_FONT_DEFAULT,
    fontFamily: FONT_REGULAR,
    fontSize: 14,
    lineHeight: 34,
  },
  ContentView: {
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
});

export default TicketsScreen;
