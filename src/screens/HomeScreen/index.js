import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TabBar, TabView, SceneMap} from 'react-native-tab-view';
import {
  COLOR_FONT_DEFAULT,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/colors';
import {FONT_BOLD, FONT_REGULAR} from '../../constants/fonts';

import MainFragment from './mainFragment';

const LicensedTab = () => <MainFragment />;
const UnlicensedTab = () => (
  <View>
    <Text>Unlicensed Tab</Text>
  </View>
);

function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'licensed', title: 'Licensed'},
    {key: 'unlicensed', title: 'Unlicensed'},
    {key: 'clinics', title: 'Clinics'},
    {key: 'other', title: 'Other'},
    {key: 'follow', title: 'Follow'},
  ]);

  const renderScene = SceneMap({
    licensed: LicensedTab,
    unlicensed: UnlicensedTab,
    clinics: UnlicensedTab,
    other: UnlicensedTab,
    follow: UnlicensedTab,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: COLOR_PINK}}
      style={{backgroundColor: COLOR_WHITE}}
      scrollEnabled
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: focused ? COLOR_PINK : COLOR_FONT_DEFAULT,
              fontSize: 14,
              fontFamily: FONT_REGULAR,
            }}
            numberOfLines={1}
            ellipsizeMode="tail">
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Appbar}>
        <View style={styles.CurrentLocation}>
          <Text style={styles.LocationTitle}>Current Location</Text>
          <Text style={styles.LocationDetail}>Middleburg, VA</Text>
        </View>
        <Button title="Search" />
        <Button title="Group" />
        <Button title="Map" />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    flex: 1,
  },
  Appbar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 20,
    // gap: 1,
  },
  CurrentLocation: {
    flexDirection: 'column',
  },
  LocationTitle: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    color: COLOR_FONT_DEFAULT,
  },
  LocationDetail: {
    fontFamily: FONT_BOLD,
    fontSize: 13,
    color: COLOR_FONT_DEFAULT,
  },
});

export default HomeScreen;
