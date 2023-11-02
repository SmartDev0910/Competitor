import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

function EventsScreen() {
  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View style={styles.Wrapper}>
        <Text>Your Events Screen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 40,
    width: '100%',
  },
});

export default EventsScreen;
