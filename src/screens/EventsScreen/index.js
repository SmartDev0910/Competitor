import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import EventPane from '../../components/home/EventPane';
import {COLOR_WHITE} from '../../constants/colors';
import Events from '../../constants/home/events';

function EventsScreen() {
  return (
    <ScrollView style={{backgroundColor: COLOR_WHITE}}>
      <View style={styles.Wrapper}>
        <Text>Your Events Screen</Text>
        <EventPane
          title={Events[0].title}
          image={Events[0].image}
          date={Events[0].date}
          location={Events[0].location}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    margin: 24,
  },
});

export default EventsScreen;
