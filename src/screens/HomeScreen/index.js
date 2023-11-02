import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import {YearOfHorseIcon} from '../../constants/icons';
import {COLOR_DEFAULT} from '../../constants/colors';

function HomeScreen() {
  return (
    <ScrollView style={{backgroundColor: COLOR_DEFAULT}}>
      <View style={styles.Wrapper}>
        <Text>Your Home Screen</Text>
        <Image
          source={YearOfHorseIcon}
          style={{width: 24, height: 24}}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 40,
    width: '100%',
  },
});

export default HomeScreen;
