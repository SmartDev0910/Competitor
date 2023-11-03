import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

function NotificationScreen() {
  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View style={styles.Wrapper}>
        <Text>Your Notification Screen</Text>
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

export default NotificationScreen;
